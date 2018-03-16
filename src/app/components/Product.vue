<template>
    <div class="product card">
        <div class="product__image" :style="{ backgroundImage: `url(${product.image})` }"></div>

        <div class="product__info">
            <div class="product__info__title">{{ product.title }}</div>

            <div class="product__info__divider"></div>

            <div class="product__info__price">
                {{ product.currencyFormat }}
                <span class="product__info__price__integer">
                    {{ formatPrice(product.price).split(',')[0] }}
                </span>
                {{ `,${formatPrice(product.price).split(',')[1]}` }}
            </div>

            <div v-if="installmentPrice" class="product__info__installments">
                {{ `ou ${product.installments} x` }}
                <span class="product__info__installments__price">
                    {{ `${product.currencyFormat} ${installmentPrice}` }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import formatPrice from '_utils/format-price'

    export default {
        name: 'Product',

        props: {
            product: {
                type: Object,
                required: true
            }
        },

        computed: {
            installmentPrice () {
                return this.product.installments
                    ? formatPrice(this.product.price / this.product.installments)
                    : 0
            }
        },

        methods: {
            formatPrice
        }
    }
</script>

<style lang="scss" scoped>
    @import '~_scss_components/card';
    @import '~_scss_components/divider';

    .product {
        &__image {
            width: 100%;
            height: 230px;

            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        &__info {
            padding: 10px;

            display: flex;
            flex-direction: column;
            align-items: center;

            &__title {
                font-size: 14px;
            }

            &__divider {
                @include divider($color-yellow);

                width: 15px;

                margin: 3px 0;
            }

            &__price {
                display: flex;
                align-items: baseline;

                font-size: 12px;

                &__integer {
                    margin-left: 4px;

                    font-size: 18px;
                    font-weight: bold;
                }
            }

            &__installments {
                color: $color-grey;
                font-size: 13px;

                &__price {
                    font-weight: bold;
                }
            }
        }
    }
</style>
