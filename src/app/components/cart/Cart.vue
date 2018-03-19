<template>
    <div class="cart" :style="cartStyle">
        <div class="cart__close" @click="close"></div>

        <div class="cart__header">
            <div class="cart__header__image"
                :class="{ badge: totalProducts }"
                :badge="totalProducts"
            ></div>
            <span class="cart__header__title">SACOLA</span>
        </div>

        <div class="cart__divider divider"></div>

        <div class="cart__list">
            <template v-for="product in products">
                <cart-item
                    :key="product.id"
                    :item="product"
                ></cart-item>

                <div :key="`d-${product.id}`" class="divider"></div>
            </template>
        </div>

        <div class="cart__price">
            <span class="cart__price__label">Subtotal</span>
            <div class="cart__price__value">
                <div class="cart__price__value__total price">
                    {{ currencyFormat }}
                    <span class="price__integer">
                        {{ totalPriceInteger }}
                    </span>
                    {{ totalPriceFloat }}
                </div>

                <div v-if="minorInstallment" class="cart__price__value__installments">
                    {{ `ou em até ${minorInstallment} x` }}
                    <span class="installments__price">
                        {{ `${currencyFormat} ${installmentPrice}` }}
                    </span>
                </div>
            </div>
        </div>

        <button class="cart__button button">Comprar</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CartItem from '_components/cart/CartItem.vue'
    import formatPrice from '_utils/format-price'

    export default {
        name: 'Cart',

        components: {
            CartItem
        },

        data () {
            return {
                cartStyle: {
                    right: '-100%',
                    opacity: 0
                }
            }
        },

        computed: {
            currencyFormat () {
                return this.products.length
                    ? this.products[0].currencyFormat
                    : ''
            },

            totalPrice () {
                return this.products.reduce((prev, curr) =>
                    prev + (curr.price * curr.quantity)
                , 0)
            },

            totalPriceInteger () {
                return this.totalPrice
                    ? formatPrice(this.totalPrice).split(',')[0]
                    : '---'
            },

            totalPriceFloat () {
                return this.totalPrice
                    ? `,${formatPrice(this.totalPrice).split(',')[1]}`
                    : ''
            },

            minorInstallment () {
                return this.products.length
                    ? this.products.map(p => p.installments).sort()[0]
                    : 0
            },

            installmentPrice () {
                return this.minorInstallment
                    ? formatPrice(this.totalPrice / this.minorInstallment)
                    : 0
            },

            ...mapState({
                products: state => state.cart.products
            }),

            totalProducts () {
                return this.products.reduce((prev, curr) =>
                    prev + curr.quantity
                , 0)
            }
        },

        methods: {
            open () {
                this.cartStyle = {
                    transition: 'right .45s ease-out, opacity 0s',
                    right: '0%',
                    opacity: 1
                }
            },

            close () {
                this.cartStyle = {
                    transition: 'right .45s ease-out, opacity .5s cubic-bezier(1,0,1,0)',
                    right: '-100%',
                    opacity: 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/badge';
    @import '~_scss_components/button';
    @import '~_scss_components/divider';
    @import '~_scss_components/price';

    .cart {
        width: 100%;
        height: 100%;
        max-width: 400px;
        max-height: 100%;

        padding: 15px;

        position: fixed;
        top: 0;

        background-color: $color-black;

        color: white;

        .divider {
            @include divider(black);

            width: 100%;

            margin: 5px 0;
        }

        &__close {
            width: 20px;
            height: 20px;

            position: absolute;
            top: 10px;
            right: 15px;

            background-image: url('~_images/times-black.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;

            cursor: pointer;

            &:hover {
                background-image: url('~_images/times-white.png');
            }
        }

        &__header {
            padding: 15px 0 30px;

            display: flex;
            align-items: center;
            justify-content: center;

            &__image {
                width: 40px;
                height: 40px;

                background-image: url('~_images/cart-white.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }

            &__title {
                padding-left: 15px;

                font-size: 20px;
                font-weight: bold;
                text-shadow: 0px 0 white;
            }
        }

        &__list {
            max-height: calc(100% - 235px);
            overflow: scroll;
        }

        &__price {
            padding: 25px 0;

            display: flex;
            align-items: center;
            justify-content: space-between;

            &__label {
                color: $color-grey;
                font-size: 12px;
                text-transform: uppercase;
                text-shadow: 0 0 $color-grey;
            }

            &__value {
                &__total {
                    color: $color-yellow;
                    text-align: right;

                    .price {
                        @include price(18px, 18px);

                        &__integer {
                            text-shadow: 0 0 $color-yellow;
                        }
                    }
                }

                &__installments {
                    color: $color-grey;
                    font-size: 11px;
                    text-transform: uppercase;
                }
            }
        }

        &__button:hover {
            background-color: white;

            color: black;
        }
    }
</style>
