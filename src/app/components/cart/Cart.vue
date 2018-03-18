<template>
    <div class="cart">
        <div class="cart__header">
            <i class="cart__header__icon fas fa-shopping-bag"></i>
            <span class="cart__header__title">SACOLA</span>
        </div>

        <div class="cart__divider divider"></div>

        <div class="cart__list"></div>

        <div class="cart__price">
            <span class="cart__price__label">Subtotal</span>
            <div class="cart__price__value">
                <div class="cart__price__value__total price">
                    {{ currencyFormat }}
                    <span class="price__integer">
                        {{ formatPrice(totalPrice).split(',')[0] }}
                    </span>
                    {{ `,${formatPrice(totalPrice).split(',')[1]}` }}
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
    import formatPrice from '_utils/format-price'

    export default {
        name: 'Cart',

        data () {
            return {
                products: [
                    {
                        id: 0,
                        title: 'Camisa Nike Corinthians I',
                        description: '14/15 s/nº',
                        availableSizes: ['S', 'G', 'GG', 'GGG'],
                        style: 'Branco com listras pretas',
                        price: 229.9,
                        installments: 9,
                        currencyId: 'BRL',
                        currencyFormat: 'R$',
                        isFreeShipping: true,
                        quantity: 2,
                        image: 'https://i2.zst.com.br/images/camisa-torcedor-corinthians-i-2017-18-sem-numero-nike-photo179243761-45-2a-11.jpg'
                    },
                    {
                        id: 1,
                        title: 'Camisa Nike Corinthians II',
                        description: '14/15 s/nº',
                        availableSizes: ['S', 'G', 'GG', 'GGG'],
                        style: 'Preta com listras brancas',
                        price: 229.9,
                        installments: 9,
                        currencyId: 'BRL',
                        currencyFormat: 'R$',
                        isFreeShipping: true,
                        quantity: 1,
                        image: 'https://i2.zst.com.br/images/camisa-torcedor-corinthians-i-2017-18-sem-numero-nike-photo179243761-45-2a-11.jpg'
                    }
                ]
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

            minorInstallment () {
                return this.products.length
                    ? this.products.map(p => p.installments).sort()[0]
                    : 0
            },

            installmentPrice () {
                return this.minorInstallment
                    ? formatPrice(this.totalPrice / this.minorInstallment)
                    : 0
            }
        },

        methods: {
            formatPrice
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/button';
    @import '~_scss_components/divider';
    @import '~_scss_components/price';

    .cart {
        width: 100%;
        height: 100%;

        padding: 15px;

        position: fixed;
        top: 0;
        right: 0;

        background-color: $color-black;

        color: white;

        .divider {
            @include divider(black);

            width: 100%;

            margin: 5px 0;
        }

        &__header {
            padding: 15px 0 30px;

            display: flex;
            align-items: center;
            justify-content: center;

            &__icon {
                font-size: 34px;
            }

            &__title {
                padding-left: 15px;

                font-size: 20px;
                font-weight: bold;
                text-shadow: 0px 0 white;
            }
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
    }
</style>
