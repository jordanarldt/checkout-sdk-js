[@bigcommerce/checkout-sdk](../README.md) / BraintreePaypalCreditButtonInitializeOptions

# Interface: BraintreePaypalCreditButtonInitializeOptions

## Table of contents

### Properties

- [shippingAddress](BraintreePaypalCreditButtonInitializeOptions.md#shippingaddress)
- [style](BraintreePaypalCreditButtonInitializeOptions.md#style)

### Methods

- [onAuthorizeError](BraintreePaypalCreditButtonInitializeOptions.md#onauthorizeerror)
- [onError](BraintreePaypalCreditButtonInitializeOptions.md#onerror)
- [onPaymentError](BraintreePaypalCreditButtonInitializeOptions.md#onpaymenterror)

## Properties

### shippingAddress

• `Optional` **shippingAddress**: ``null`` \| [`Address`](Address.md)

Address to be used for shipping.
If not provided, it will use the first saved address from the active customer.

___

### style

• `Optional` **style**: `Pick`<[`PaypalButtonStyleOptions`](PaypalButtonStyleOptions.md), ``"color"`` \| ``"layout"`` \| ``"size"`` \| ``"label"`` \| ``"shape"`` \| ``"tagline"`` \| ``"fundingicons"`` \| ``"height"``\>

A set of styling options for the checkout button.

## Methods

### onAuthorizeError

▸ `Optional` **onAuthorizeError**(`error`): `void`

A callback that gets called if unable to authorize and tokenize payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`StandardError`](../classes/StandardError.md) \| [`BraintreeError`](BraintreeError.md) | The error object describing the failure. |

#### Returns

`void`

___

### onError

▸ `Optional` **onError**(`error`): `void`

A callback that gets called on any error instead of submit payment or authorization errors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`StandardError`](../classes/StandardError.md) \| [`BraintreeError`](BraintreeError.md) | The error object describing the failure. |

#### Returns

`void`

___

### onPaymentError

▸ `Optional` **onPaymentError**(`error`): `void`

A callback that gets called if unable to submit payment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`StandardError`](../classes/StandardError.md) \| [`BraintreeError`](BraintreeError.md) | The error object describing the failure. |

#### Returns

`void`
