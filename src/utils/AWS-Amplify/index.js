import { Auth, Analytics } from 'aws-amplify'

const config = {
  Auth: {
    identityPoolId: 'us-east-1:3e2ff75a-c3a9-457b-8fac-c40a7d86e776',
    region: 'us-east-1'
  },
  AWSPinpoint: {
    appId: '8f902ad0cfc94cf5b6fea0177b002f02',
    region: 'us-east-1',
    mandatorySignIn: false,
  },
};

export default class Amplify {
  constructor() {
    Auth.configure(config);
    Analytics.configure(config);
  }

  updateEndpoint(params = {}) {
  //   {
  //     userId: userId,
  //     attributes: {
  //         HasShoppingCart: ['true']
  //     },
  //     metrics: {
  //         ItemsInCart: cart.items.length
  //     }
  // }
    Analytics.updateEndpoint(params);
  }

  recordEvent(name, attributes) {
  //   {
  //     name: 'ProductAdded',
  //     attributes: {
  //         userId: userId,
  //         cartId: cart.id,
  //         productId: product.id,
  //         name: product.name,
  //         category: product.category,
  //         image: product.image,
  //         feature: feature,
  //         experimentCorrelationId: experimentCorrelationId
  //     },
  //     metrics: {
  //         quantity: quantity,
  //         price: +product.price.toFixed(2)
  //     }
  // }
    const userId = '123-123';
    const params = {
      name,
      attributes: {
        ...attributes,
        userId,
      }
    }
    Analytics.record(params);
  }
}
