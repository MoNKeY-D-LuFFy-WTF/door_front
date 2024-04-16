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
            },
            totalPriceOfQuantity: null,
            totalPriceDiscountOfQuantity: null,
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

                    this.doorMobileValue.material = this.door.door_materials.filter(mat => mat.door_material_id === this.door.door_color.door_material_id)[0];
                    this.doorMobileValue.colors = this.door.door_colors.filter(col => col.door_material_id === this.doorMobileValue.material.door_material_id);

                    let doorPirce = this.door.price;
                    let doorMaterialPirce = this.doorMobileValue.material.material.price;
                    let doorColorPirce = this.door.door_color.price;
                    let windowPrice = 0;
                    let soungPrice = 0;

                    this.doorMobileValue.open = this.door.door_open_system[0].open_system;
                    let doorOpenPrice = this.doorMobileValue.open.price;
                    this.doorMobileValue.thick = this.door.door_thick[0].thick;
                    let doorThickPrice = this.doorMobileValue.thick.price;

                    if (this.door.window === 1) {
                        windowPrice = 500;
                    }
                    if (this.door.soung === 1) {
                        soungPrice = 600;
                    }
                    this.doorMobileValue.totalPrice = Math.round(doorPirce + doorMaterialPirce + doorColorPirce + windowPrice + soungPrice + doorOpenPrice + doorThickPrice);
                    this.totalPriceOfQuantity = this.doorMobileValue.totalPrice;
                    if (this.door.discount) {
                        this.doorMobileValue.totalPriceDiscount = Math.round(this.doorMobileValue.totalPrice - (this.doorMobileValue.totalPrice * this.door.discount / 100));
                        this.totalPriceDiscountOfQuantity = this.doorMobileValue.totalPriceDiscount;
                    }
                    this.doorMobileValue.color = this.door.door_color;
                })
                .catch(err => console.log(err))
                .finally(fin => {
                    console.log(this.door);
                });

        },
        //Логика количества дверей кнопки и input
        quantityActions(param) {
            if (param === 'remove') {
                this.doorMobileValue.quantity--;
                if (this.doorMobileValue.quantity) {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * this.totalPriceDiscountOfQuantity;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.totalPriceOfQuantity;
                }

            } else if (param === 'add') {
                this.doorMobileValue.quantity++;
                if (this.doorMobileValue.quantity) {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * this.totalPriceDiscountOfQuantity;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.totalPriceOfQuantity;

                }
            } else if (param === 'input') {
                if (this.doorMobileValue.quantity !== 0) {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount = this.doorMobileValue.quantity * this.totalPriceDiscountOfQuantity;
                    }
                    this.doorMobileValue.totalPrice = this.doorMobileValue.quantity * this.totalPriceOfQuantity;

                }
            }
        },
        //Логика по выбору материала покрытия дверей
        changeMaterialDoor(material) {

            //Отбераем старые цены
            if (this.doorMobileValue.totalPriceDiscount) {
                this.doorMobileValue.totalPriceDiscount -= this.doorMobileValue.material.material.price;
                this.doorMobileValue.totalPriceDiscount -= this.doorMobileValue.colors[0].price
            }
            this.doorMobileValue.totalPrice -= this.doorMobileValue.material.material.price;
            this.doorMobileValue.totalPrice -= this.doorMobileValue.colors[0].price

            //Меняем места 
            this.doorMobileValue.material = material;
            this.doorMobileValue.colors = material.material.door_colors;
            this.door.door_color = this.doorMobileValue.colors[0];

            //Добовляем новые цены
            if (this.doorMobileValue.totalPriceDiscount) {
                this.doorMobileValue.totalPriceDiscount += material.material.price;
                this.doorMobileValue.totalPriceDiscount += material.material.door_colors[0].price;
            }
            this.doorMobileValue.totalPrice += material.material.price;
            this.doorMobileValue.totalPrice += material.material.door_colors[0].price;

            this.doorMobileValue.color = material.material.door_colors[0];
        },
        changeDoorColor(color) {
            //Удаляем старую цену 
            if (this.doorMobileValue.totalPriceDiscount) {
                this.doorMobileValue.totalPriceDiscount -= this.door.door_color.price;
            }
            this.doorMobileValue.totalPrice -= this.door.door_color.price;

            //меняем места
            this.door.door_color = color;

            //Добовляем новую цену
            if (this.doorMobileValue.totalPriceDiscount) {
                this.doorMobileValue.totalPriceDiscount += color.price;
            }
            this.doorMobileValue.totalPrice += color.price;

            this.doorMobileValue.color = color;
        },
        //Проверяем селекты
        changeSelects(param, event) {
            const selectValue = event.target.value;
            if (param === 'window') {
                if (selectValue === 'yes') {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount += 500;
                    }
                    this.doorMobileValue.totalPrice += 500;

                } else if (selectValue === 'no') {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount -= 500;
                    }
                    this.doorMobileValue.totalPrice -= 500;

                }
                this.doorMobileValue.window = selectValue;
            } else if (param === 'soung') {
                if (selectValue === 'yes') {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount += 600;
                    }
                    this.doorMobileValue.totalPrice += 600;

                } else if (selectValue === 'no') {
                    if (this.doorMobileValue.totalPriceDiscount) {
                        this.doorMobileValue.totalPriceDiscount -= 600;
                    }
                    this.doorMobileValue.totalPrice -= 600;

                }
                this.doorMobileValue.soung = selectValue;
            } else if (param === 'open') {
                const oldPrice = this.doorMobileValue.open.price;
                if (this.doorMobileValue.totalPriceDiscount) {

                    //Удаляем старую цену
                    this.doorMobileValue.totalPriceDiscount -= oldPrice;

                    //Добояляем новую цену
                    this.door.door_open_system.forEach(element => {

                        if (element.open_system.id == selectValue) {
                            this.doorMobileValue.totalPriceDiscount += element.open_system.price;
                            this.doorMobileValue.open = element.open_system;
                        }

                    });
                }
                //Удаляем старую цену
                this.doorMobileValue.totalPrice -= oldPrice;

                //Добояляем новую цену
                this.door.door_open_system.forEach(element => {

                    if (element.open_system.id == selectValue) {
                        this.doorMobileValue.totalPrice += element.open_system.price;
                        this.doorMobileValue.open = element.open_system;
                    }

                });

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
        },
        //Добовляем в корзину (localStorage)
        addDoorToBasket() {
            const basketData = {
                doorId: this.doorMobileValue.id,
                quantity: this.doorMobileValue.quantity,
                materialId: this.doorMobileValue.material.door_material_id,
                colorId: this.doorMobileValue.color.id,
                open: this.doorMobileValue.open.id,
                thick: this.doorMobileValue.thick.id,
                window: this.doorMobileValue.window || this.door.window,
                soung: this.doorMobileValue.soung || this.door.soung,
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