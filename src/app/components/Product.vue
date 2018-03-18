<template>
    <div class="product flip">
        <!-- front card -->
        <div class="product__front flip__front card">
            <div class="product__front__image" :style="{ backgroundImage: `url(${product.image})` }"></div>

            <div class="product__front__info">
                <div class="product__front__info__title">{{ product.title }}</div>

                <div class="product__front__info__divider divider"></div>

                <div class="product__front__info__price price">
                    {{ product.currencyFormat }}
                    <span class="price__integer">
                        {{ formatPrice(product.price).split(',')[0] }}
                    </span>
                    {{ `,${formatPrice(product.price).split(',')[1]}` }}
                </div>

                <div v-if="installmentPrice" class="product__front__info__installments installments">
                    {{ `ou ${product.installments} x` }}
                    <span class="installments__price">
                        {{ `${product.currencyFormat} ${installmentPrice}` }}
                    </span>
                </div>
            </div>
        </div>

        <!-- back card -->
        <div class="product__back flip__back card">
            <div class="product__back__title">{{ product.title }}</div>

            <div class="product__back__style info-group">
                <span class="info-group__label">Estilo:</span>
                <span class="info-group__text">{{ product.style }}</span>
            </div>

            <div class="product__back__sizes info-group">
                <span class="info-group__label">Tamanhos disponíveis:</span>
                <span class="info-group__text">{{ product.availableSizes.join(', ') }}</span>
            </div>

            <div class="product__back__description info-group">
                <span class="info-group__label">Descrição:</span>
                <span class="info-group__text">{{ product.description }}</span>
            </div>

            <div class="product__back__divider divider"></div>

            <div class="product__back__price price">
                {{ product.currencyFormat }}
                <span class="price__integer">
                    {{ formatPrice(product.price).split(',')[0] }}
                </span>
                {{ `,${formatPrice(product.price).split(',')[1]}` }}
            </div>

            <div v-if="installmentPrice" class="product__back__installments installments">
                {{ `ou ${product.installments} x` }}
                <span class="installments__price">
                    {{ `${product.currencyFormat} ${installmentPrice}` }}
                </span>
            </div>

            <button class="product__back__add-to-cart button">Add to cart</button>
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
    @import '~_scss_components/button';
    @import '~_scss_components/card';
    @import '~_scss_components/divider';
    @import '~_scss_components/flip';
    @import '~_scss_components/price';

    .product {
        width: 100%;
        max-width: 300px;

        .divider {
            @include divider($color-yellow);

            width: 15px;

            margin: 3px 0;
        }

        .price {
            @include price();
        }

        .installments {
            color: $color-grey;
            font-size: 13px;

            &__price {
                font-weight: bold;
            }
        }

        &__front {
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
            }
        }

        &__back {
            padding: 10px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            background-color: white;

            .info-group {
                display: flex;
                flex-direction: column;
                align-items: center;

                font-size: 14px;

                &__label {
                    color: $color-grey;
                    font-weight: bold;
                }
            }

            &__title {
                font-weight: bold;
                text-align: center;
            }
        }
    }
</style>
