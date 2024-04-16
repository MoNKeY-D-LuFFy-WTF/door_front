<template>
    <div class="pay__description">
        <div class="service__content-title">
            <h4>ОПИСАНИЕ ПРОЦЕССА ПЕРЕДАЧИ ДАННЫХ</h4>
        </div>
        <div class="pay__description-contnet">
            <p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение
                с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола
                шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей
                Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может
                потребоваться ввод специального пароля.</p>
            <p>Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации
                обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением
                случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в
                строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.</p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style  scoped>
h6 {
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    line-height: 24px;
}

p {
    font-size: 16px;
    color: #333;
}

.pay__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.pay__description-contnet {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #ccc;
    margin: 0px 0px 2rem 0px;
}

.pay__description-contnet p {
    margin: 0px 0px 20px 0px;
}
</style>