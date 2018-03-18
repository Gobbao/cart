<template>
    <div class="cart-item">
        <div class="cart-item__close">
            <i class="cart-item__close__icon fas fa-times"></i>
        </div>

        <div class="cart-item__content">
            <div class="cart-item__content__image"
                :style="{ backgroundImage: `url(${item.image})` }"
            ></div>

            <div class="cart-item__content__info">
                <div class="cart-item__content__info__title">{{ item.title }}</div>

                <div class="cart-item__content__info__style">{{ item.style }}</div>

                <div class="cart-item__content__info__quantity">
                    {{ `Quantidade: ${item.quantity}` }}
                </div>
            </div>
        </div>

        <div class="cart-item__price price">
            {{ item.currencyFormat }}
            <span class="price__integer">
                {{ formatPrice(item.price).split(',')[0] }}
            </span>
            {{ `,${formatPrice(item.price).split(',')[1]}` }}
        </div>
    </div>
</template>

<script>
    import formatPrice from '_utils/format-price'

    export default {
        name: 'CartItem',

        props: {
            item: {
                type: Object,
                required: true
            }
        },

        methods: {
            formatPrice
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/price';

    .cart-item {
        padding: 15px 0;

        position: relative;

        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        &__close {
            position: absolute;
            top: 13px;
            right: 0;

            color: black;
            font-size: 18px;

            cursor: pointer;

            &:hover {
                color: white;

                & ~ div {
                    color: darken($color-yellow, 30);
                    text-decoration: line-through darken($color-yellow, 30);

                    .cart-item__content__image:after {
                        width: 100%;
                        height: 100%;

                        position: absolute;
                        top: 0;
                        left: 0;

                        content: '';
                        background-color: rgba(black, .7);
                    }

                    .cart-item__content__info__title {
                        color: $color-grey;
                        text-decoration: line-through $color-grey;
                    }

                    .cart-item__content__info__style,
                    .cart-item__content__info__quantity {
                        color: darken($color-grey, 40);
                        text-decoration: line-through darken($color-grey, 40);
                    }
                }
            }
        }

        &__content {
            display: flex;
            align-items: center;

            &__image {
                width: 45px;
                height: 45px;

                position: relative;

                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }

            &__info {
                margin-left: 15px;

                font-size: 12px;

                &__title {
                    font-weight: bold;
                }

                &__style,
                &__quantity {
                    color: $color-grey;
                }
            }
        }

        .price {
            @include price(12px);

            color: $color-yellow;

            &__integer {
                text-shadow: 0 0 $color-yellow;
            }
        }
    }
</style>
