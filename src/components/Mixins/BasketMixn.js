import BACKEND_URL from "@/BACKEND__URL";
import Tags from "@/components/Tags.vue"
import axios from "axios";
export default {
    components: {
        Tags
    },
    data() {
        return {
            BACKEND_URL,
            doors: [],
            form: {
                show: false,
            },
            doorMobileValue: {
                totalPrice: 0,
                totalPriceDiscount: 0,
            },
            response: null,
        }
    },
    methods: {
        //Получаем двери 
        async getDataWithDB() {
            let localData = JSON.parse(localStorage.getItem('doors'));
            if (localData) {
                await axios.post(
                    `${BACKEND_URL}/doors/basket`,
                    { doors: localData, }
                )
                    .then(res => {
                        this.doors = res.data;
                        //Обшая цена
                        this.doors.forEach(element => {
                            this.doorMobileValue.totalPrice += element.price_comp * element.quantity;
                            if (element.discount) {
                                this.doorMobileValue.totalPriceDiscount += element.price_comp_discount * element.quantity;
                            } else {
                                this.doorMobileValue.totalPriceDiscount += element.price_comp * element.quantity;
                            }
                        });
                    })
                    .catch(err => console.log(localData));
                ;
            }
        },
        //Вся логика количества кнопки инпут и тд 
        actionQuantity(param, door) {
            let localData = JSON.parse(localStorage.getItem('doors'));
            if (param === 'add') {
                door.quantity++;
                if (door.discount) {
                    door.price_mobile_discount = door.price_comp_discount * door.quantity;
                    //Итог Цена
                    this.doorMobileValue.totalPrice += door.price_comp;
                    this.doorMobileValue.totalPriceDiscount += door.price_comp_discount;
                } else {
                    door.price_mobile = door.price_comp * door.quantity;
                    //Итог Цена
                    this.doorMobileValue.totalPriceDiscount += door.price_comp;
                    this.doorMobileValue.totalPrice += door.price_comp;
                }
            } else if (param === 'remove') {
                door.quantity--;
                if (door.discount) {
                    door.price_mobile_discount = door.price_comp_discount * door.quantity;
                    //Итог Цена
                    this.doorMobileValue.totalPrice -= door.price_comp;
                    this.doorMobileValue.totalPriceDiscount -= door.price_comp_discount;
                } else {
                    door.price_mobile = door.price_comp * door.quantity;
                    //Итог Цена
                    this.doorMobileValue.totalPriceDiscount -= door.price_comp;
                    this.doorMobileValue.totalPrice -= door.price_comp;
                }
                if (door.quantity <= 0) {
                    this.doors = this.doors.filter(item => item.id !== door.id);
                    localData = localData.filter(element => element.doorId != door.id);
                }
            } else if (param === "input") {
                if (door.quantity <= 0) {
                    //Итог Цена
                    if (door.discount) {
                        this.doorMobileValue.totalPrice -= door.price_mobile;
                        this.doorMobileValue.totalPriceDiscount -= door.price_mobile_discount;
                    } else {
                        this.doorMobileValue.totalPrice -= door.price_mobile;
                        this.doorMobileValue.totalPriceDiscount -= door.price_mobile;
                    }
                    this.doors = this.doors.filter(item => item.id !== door.id);
                    localData = localData.filter(element => element.doorId != door.id);
                } else {
                    if (door.discount) {
                        door.price_mobile_discount = door.price_comp_discount * door.quantity;
                        //Итог Цена
                        this.doorMobileValue.totalPrice = door.price_comp * door.quantity;
                        this.doorMobileValue.totalPriceDiscount = door.price_comp_discount * door.quantity;
                    } else {
                        door.price_mobile = door.price_comp * door.quantity;
                        //Итог Цена
                        this.doorMobileValue.totalPrice = door.price_comp * door.quantity;
                        this.doorMobileValue.totalPriceDiscount = door.price_comp * door.quantity;
                    }
                }
            }
            //Сахраняем в локал стор
            if (localData) {
                localData.forEach((element) => {
                    if (element.doorId == door.id) {
                        element.quantity = door.quantity;
                    }
                });
                localStorage.setItem('doors', JSON.stringify(localData));
            }
        },
        //Удаление 
        removeDoor(door) {
            let localData = JSON.parse(localStorage.getItem('doors'));
            if (localData) {
                //Итог Цена
                if (door.discount) {
                    this.doorMobileValue.totalPrice -= door.price_mobile;
                    this.doorMobileValue.totalPriceDiscount -= door.price_mobile_discount;
                } else {
                    this.doorMobileValue.totalPrice -= door.price_mobile;
                    this.doorMobileValue.totalPriceDiscount -= door.price_mobile;
                }
                this.doors = this.doors.filter(item => item.id !== door.id);
                localData = localData.filter(element => element.doorId != door.id);
                localStorage.setItem('doors', JSON.stringify(localData));
            }
        },
        //Модальное окно с формой
        toggleModalForm(bool, response) {
            if (bool) {
                this.form.show = bool;
                document.body.style.overflow = "hidden";
            } else {
                this.form.show = bool;
                document.body.style.overflow = "auto";
            }
            if (response) {
                this.response = response;
                this.doors = [];
            }

        }
    },

    mounted() {
        this.getDataWithDB();
    },
};

// for (let i = 0; i < filteredArray[b].door_materials.door_colors.length; i++) {
//    if (filteredArray[b].door_materials.door_colors[i].id === localStorageData[a].doorColorId) {
//         filteredArray[b].door_materials.door_colors = filteredArray[b].door_materials.door_colors[i];
//         filteredArray[b].door_color = filteredArray[b].door_materials.door_colors;
//         filteredArray[b].price = filteredArray[b].door_color.price;
//         filteredArray[b].price_discount = filteredArray[b].price - (filteredArray[b].price * filteredArray[b].discount / 100);
//         filteredArray[b].total_price = filteredArray[b].price_discount * filteredArray[b].quanitity;

//     }
// }
// filterDataForBasket(basketData, localStorageData) {
//     const uniqueIds = new Set(localStorageData.map(obj => obj.doorColorId));
//     const filteredArray = basketData.filter(obj => uniqueIds.has(obj.door_color.id));
//     console.log(filteredArray);
//     const newArray = [];
//     for (let a = 0; a < localStorageData.length; a++) {
//         for (let b = 0; b < filteredArray.length; b++) {
//             if (localStorageData[a].id === filteredArray[b].id) {
//                 filteredArray[b].quanitity = localStorageData[a].quantity;
//                 for (let c = 0; c < filteredArray[b].door_materials.length; c++) {
//                     if (filteredArray[b].door_materials[c].door_material_id === localStorageData[a].materialId) {
//                         let material = filteredArray[b].door_materials[c].material;
//                         filteredArray[b].door_materials = material;
//                     }
//                 }
//                 for (let e = 0; e < filteredArray[b].door_open_system.length; e++) {
//                     if (filteredArray[b].door_open_system[e].door_open_system_id == localStorageData[a].openSystemId) {
//                         filteredArray[b].door_open_system = filteredArray[b].door_open_system[e].open_system;
//                     }
//                 }
//                 for (let f = 0; f < filteredArray[b].door_thick.length; f++) {
//                     if (filteredArray[b].door_thick[f].door_thick_id == localStorageData[a].thickDoorId) {
//                         filteredArray[b].door_thick = filteredArray[b].door_thick[f].thick;
//                     }
//                 }
//                 newArray.push(filteredArray[b]);
//             }
//         }
//     }
//     return newArray;
// },