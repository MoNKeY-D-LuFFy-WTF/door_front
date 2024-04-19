import axios from "axios"
import BACKEND_URL from "@/BACKEND__URL";
export default {
    data() {
        return {
            door: null,
            BACKEND_URL,
            doorMobileValue: {
                id: null,
                quantity: 1,
                totalPrice: null,
                totalPriceDiscount: null,
                material: null,
                colors: null,
                open: null,
                thick: null,
                color: null,
                window: null,
                soung: null,
                complectPirce: 0,
                isCombo: true,
            },
            basketData: [],
        }
    },
    methods: {
        //Получаем дверь по id и считываем его состав (дверь по умолчанию)
        async getDoor() {
            //Получаем id двери
            let routeId = this.$route.params.door_url;
            let id = [];
            for (let i = routeId.length - 1; i > 0; i--) {
                if (isNaN(+routeId[i])) {
                    break
                } else {
                    id.push(+routeId[i]);
                }
            }
            id = id.reverse().join("");
            this.doorMobileValue.id = id;
            await axios.get(`${BACKEND_URL}/doors/${id}`)
                .then(res => {
                    this.door = res.data;
                    this.door.combo = this.door.combo.combo

                    //Мобилные цены
                    this.doorMobileValue.complectPirce = Math.round(this.door.combo.total_price + (this.door.combo.total_price * 15 / 100));
                    this.doorMobileValue.totalPrice = Math.round(this.door.combo.total_price + (this.door.combo.total_price * 15 / 100));
                    if (this.door.discount) {
                        this.doorMobileValue.totalPriceDiscount = this.door.combo.total_price;
                    }

                    //Материалы покрития и цвета
                    this.doorMobileValue.material = this.door.combo.material;
                    this.doorMobileValue.colors = this.door.door_color_all.filter(colo => colo.door_material_id == this.doorMobileValue.material.id);

                    //Система открывания 
                    this.doorMobileValue.open = this.door.combo.open;

                    //Тольщина стены
                    this.doorMobileValue.thick = this.door.combo.thick;

                    //Цвет 
                    this.doorMobileValue.color = this.door.combo.color;

                    //Остекление звукоизоляция 
                    this.doorMobileValue.window = this.door.combo.window;
                    this.doorMobileValue.soung = this.door.combo.soung;
                })
                .catch(err => console.log(err))
                .finally(fin => {
                    console.log(this.door);
                });

        },
        //Логика количества дверей кнопки и input
        quantityActions(param) {
            const discountComplectPirce = Math.round(this.doorMobileValue.complectPirce - (this.doorMobileValue.complectPirce * this.door.discount / 100));
            if (param === 'remove') {
                this.doorMobileValue.quantity--;
                if (this.doorMobileValue.quantity) {
                    if (this.door.discount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * discountComplectPirce;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.doorMobileValue.complectPirce;
                }

            } else if (param === 'add') {
                this.doorMobileValue.quantity++;
                if (this.doorMobileValue.quantity) {
                    if (this.door.discount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * discountComplectPirce;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.doorMobileValue.complectPirce;

                }
            } else if (param === 'input') {
                if (this.doorMobileValue.quantity !== 0) {
                    if (this.door.discount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * discountComplectPirce;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.doorMobileValue.complectPirce;

                }
            }
        },
        //Логика по выбору материала покрытия дверей
        changeMaterialDoor(material) {
            this.doorMobileValue.material = material;
            this.doorMobileValue.colors = this.door.door_color_all.filter(col => col.door_material_id === material.id);
            this.door.door_color = this.doorMobileValue.colors[0];
            this.doorMobileValue.color = this.door.door_color;
            this.changeComboDoor(this.doorMobileValue);

            //Отбераем старые цены
            // if (this.door.discount) {
            //     this.doorMobileValue.totalPriceDiscount -= this.doorMobileValue.material.price;
            //     this.doorMobileValue.totalPriceDiscount -= this.doorMobileValue.colors[0].price
            // }
            // this.doorMobileValue.totalPrice -= this.doorMobileValue.material.price;
            // this.doorMobileValue.totalPrice -= this.doorMobileValue.colors[0].price

            //Меняем места 
            // this.doorMobileValue.material = material;
            // this.doorMobileValue.colors = material.door_colors;
            // this.door.door_color = this.doorMobileValue.colors[0];

            //Добовляем новые цены
            // if (this.doorMobileValue.totalPriceDiscount) {
            //     this.doorMobileValue.totalPriceDiscount += material.material.price;
            //     this.doorMobileValue.totalPriceDiscount += material.material.door_colors[0].price;
            // }
            // this.doorMobileValue.totalPrice += material.material.price;
            // this.doorMobileValue.totalPrice += material.material.door_colors[0].price;

            // this.doorMobileValue.color = material.material.door_colors[0];
        },
        changeDoorColor(color) {
            //меняем места
            this.door.door_color = color;
            this.doorMobileValue.color = color;

            this.changeComboDoor(this.doorMobileValue)
            //Удаляем старую цену 
            // if (this.doorMobileValue.totalPriceDiscount) {
            //     this.doorMobileValue.totalPriceDiscount -= this.door.door_color.price;
            // }
            // this.doorMobileValue.totalPrice -= this.door.door_color.price;



            //Добовляем новую цену
            // if (this.doorMobileValue.totalPriceDiscount) {
            //     this.doorMobileValue.totalPriceDiscount += color.price;
            // }
            // this.doorMobileValue.totalPrice += color.price;

        },
        //Проверяем селекты
        changeSelects(param, event) {
            const selectValue = event.target.value;
            if (param === 'window') {
                // if (selectValue === 'yes') {
                //     if (this.doorMobileValue.totalPriceDiscount) {
                //         this.doorMobileValue.totalPriceDiscount += 500;
                //     }
                //     this.doorMobileValue.totalPrice += 500;

                // } else if (selectValue === 'no') {
                //     if (this.doorMobileValue.totalPriceDiscount) {
                //         this.doorMobileValue.totalPriceDiscount -= 500;
                //     }
                //     this.doorMobileValue.totalPrice -= 500;

                // }
                this.doorMobileValue.window = selectValue;
            } else if (param === 'soung') {
                // if (selectValue === 'yes') {
                //     if (this.doorMobileValue.totalPriceDiscount) {
                //         this.doorMobileValue.totalPriceDiscount += 600;
                //     }
                //     this.doorMobileValue.totalPrice += 600;

                // } else if (selectValue === 'no') {
                //     if (this.doorMobileValue.totalPriceDiscount) {
                //         this.doorMobileValue.totalPriceDiscount -= 600;
                //     }
                //     this.doorMobileValue.totalPrice -= 600;

                // }
                this.doorMobileValue.soung = selectValue;
            } else if (param === 'open') {
                // const oldPrice = this.doorMobileValue.open.price;
                const newOpen = this.door.combo.opens.filter(op => op.id == selectValue)[0];
                this.doorMobileValue.open = newOpen
                // if (this.doorMobileValue.totalPriceDiscount) {

                //     //Удаляем старую цену
                //     this.doorMobileValue.totalPriceDiscount -= oldPrice;

                //     //Добояляем новую цену
                //     this.door.door_open_system.forEach(element => {

                //         if (element.open_system.id == selectValue) {
                //             this.doorMobileValue.totalPriceDiscount += element.open_system.price;
                //             this.doorMobileValue.open = element.open_system;
                //         }

                //     });
                // }
                //Удаляем старую цену
                // this.doorMobileValue.totalPrice -= oldPrice;

                //Добояляем новую цену
                // this.door.door_open_system.forEach(element => {

                //     if (element.open_system.id == selectValue) {
                //         this.doorMobileValue.totalPrice += element.open_system.price;
                //         this.doorMobileValue.open = element.open_system;
                //     }

                // });

            } else if (param === 'thick') {
                const oldPrice = this.doorMobileValue.thick.price;
                if (this.doorMobileValue.totalPriceDiscount) {

                    //Удаляем старую цену
                    this.doorMobileValue.totalPriceDiscount -= oldPrice;

                    //Добояляем новую цену
                    this.door.door_thick.forEach(element => {
                        if (element.thick.id == selectValue) {
                            this.doorMobileValue.totalPriceDiscount += element.thick.price;
                            this.doorMobileValue.thick = element.thick;
                        }
                    });
                }
                //Удаляем старую цену
                this.doorMobileValue.totalPrice -= oldPrice;

                //Добояляем новую цену
                this.door.door_thick.forEach(element => {
                    if (element.thick.id == selectValue) {
                        this.doorMobileValue.totalPrice += element.thick.price;
                        this.doorMobileValue.thick = element.thick;
                    }
                });
            }
            this.changeComboDoor(this.doorMobileValue)

        },
        //Проверяем равно ли комбо двери с выбраным клиентам
        changeComboDoor(newCombos) {
            //Проверяем подходить ли выбранный товар клиента нашему комбо
            if (newCombos.material.id == this.door.combo.material.id &&
                newCombos.open.id == this.door.combo.open.id &&
                newCombos.thick.id == this.door.combo.thick.id &&
                newCombos.color.id == this.door.combo.color.id &&
                newCombos.soung === this.door.combo.soung &&
                newCombos.window === this.door.combo.window
            ) {

                this.doorMobileValue.complectPirce = this.door.combo.total_price;
                if (this.door.discount) {
                    this.doorMobileValue.totalPrice = Math.round(this.door.combo.total_price + (this.door.combo.total_price * this.door.discount / 100));
                    this.doorMobileValue.totalPriceDiscount = this.door.combo.total_price;
                } else {
                    this.doorMobileValue.totalPrice = this.door.combo.total_price;
                    this.doorMobileValue.totalPriceDiscount = this.door.combo.total_price;
                }
                this.doorMobileValue.isCombo = true;
            } else {
                this.doorMobileValue.isCombo = false;
                let windowPrice = 0;
                let soungPrice = 0;
                if (newCombos.soung === 'yes') {
                    soungPrice += 500
                }
                if (newCombos.window === 'yes') {
                    windowPrice += 600
                }
                this.doorMobileValue.totalPrice = newCombos.material.price + newCombos.open.price + newCombos.thick.price + newCombos.color.price + this.door.price + windowPrice + soungPrice;
                this.doorMobileValue.complectPirce = newCombos.material.price + newCombos.open.price + newCombos.thick.price + newCombos.color.price + this.door.price + windowPrice + soungPrice;
                if (this.door.discount) {
                    this.doorMobileValue.totalPriceDiscount = Math.round(this.doorMobileValue.totalPrice - (this.doorMobileValue.totalPrice * this.door.discount / 100));
                }
            }
        },
        //Добовляем в корзину (localStorage)
        addDoorToBasket() {
            const basketData = {
                doorId: this.doorMobileValue.id,
                quantity: this.doorMobileValue.quantity,
                materialId: this.doorMobileValue.material.id,
                colorId: this.doorMobileValue.color.id,
                open: this.doorMobileValue.open.id,
                thick: this.doorMobileValue.thick.id,
                window: this.doorMobileValue.window || this.door.window,
                soung: this.doorMobileValue.soung || this.door.soung,
                isCombo: this.doorMobileValue.isCombo,
                priceCombo: this.door.combo.total_price,
            };
            let localData = JSON.parse(localStorage.getItem('doors'));
            if (localData) {
                if (localData.length) {
                    localData.forEach((element, index) => {
                        if (element.doorId == basketData.doorId) {
                            localData[index] = basketData;
                        } else {
                            localData.push(basketData);
                        }
                    })
                } else {
                    localData.push(basketData);
                }

                localStorage.setItem('doors', JSON.stringify(localData));
            } else {
                localStorage.setItem('doors', JSON.stringify([basketData]));
            }
        }
    },
    mounted() {
        this.getDoor();
    },
    watch: {
        "doorMobileValue.quantity": function (newVal) {
            if (newVal <= 0) {
                this.doorMobileValue.quantity = 1;
            }
        }
    }
}