<template>
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer__body">
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Подписаться на новости</div>
                        <form class="footer__subscribe" action="">
                            <input type="text" class="footer__input" placeholder="E-mail">
                        </form>
                        <div class="footer-socials">
                            <fa class="footer__icon icon" :icon="['fab', 'vk']"></fa>
                            <fa class="footer__icon icon" :icon="['fab', 'telegram']"></fa>
                            <fa class="footer__icon icon" :icon="['fab', 'instagram']"></fa>
                        </div>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Интернет магазин</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">+7(999) 999-99-99</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">+7(999) 999-99-99</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-list">
                        <div class="footer__title">Адрес магазина</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">ул. Большая красная 55</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Поддержка</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Помощь покупателю</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Доставка и оплата</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Возврат</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Программа лояльности</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer-list">
                        <div class="footer__title">Информация</div>
                        <ul class="footer__list">
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Контакты</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Магазины</a>
                            </li>
                            <li class="footer-list__item">
                                <a class="footer-list__link link" href="">Блог</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'v-footer',
}
</script>

<style lang="scss">

</style>