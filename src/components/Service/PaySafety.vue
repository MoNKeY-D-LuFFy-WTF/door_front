<template>
    <div class="pay__safety">
        <div class="service__content-title">
            <h4>БЕЗОПАСНОСТЬ ПЛАТЕЖЕЙ</h4>
        </div>
        <div class="pay__safety-content">
            <p>Настоящий сайт поддерживает 256-битное шифрование. Введенная информация не будет предоставлена третьим лицам
                за исключением случаев, предусмотренных законодательством РФ.</p>
            <p>Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платежных
                систем Visa Int. и MasterCard Europe Sprl.</p>
            <p>В случае возникновения вопросов по поводу данной конфиденциальности предоставляемой Вами информации, Вы
                можете связаться с ПАО «СБЕРБАНК РОССИИ» по телефону: <a href="tel:8 (800) 555-55-50">8 (800) 555-55-50</a>.
            </p>
            <p>Для отмены заказа, пожалуйста, обратитесь по телефону: <a href="tel:+7 (499) 430-25-04">+7 (499)
                    430-25-04</a>.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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

.pay__safety {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.pay__safety-content {
    padding: 1.5rem 0px 0px 0px;
    border-top: solid 1px #Ccc;
    margin: 0px 0px 2rem 0px;
}

.pay__safety-content p {
    margin: 0px 0px 20px 0px;
}

.pay__safety-content p a {
    color: #8f332f;
}

.pay__safety-content p a:hover {
    text-decoration: none;
}
</style>