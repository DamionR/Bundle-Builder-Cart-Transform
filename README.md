# Shopify Bundle Builder with Cart Transform

This project demonstrates a custom Shopify bundle builder using a Shopify Cart Transform function. It allows users to create a product bundle by selecting items from predefined product collections. Once selected, these items are added to the cart as a bundled product with a discounted price.

## Demonstration

<video width="600" controls>
  <source src="https://cdn.shopify.com/videos/c/o/v/54f8d8b2236b438b884d8a814190230b.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

[![Image alt text]([https://img.youtube.com/vi/YOUTUBE-ID/0.jpg](https://cdn.shopify.com/videos/c/o/v/82e4a485d5e646f598492681af61dbe7.mov))]([https://www.youtube.com/watch?v=YOUTUBE-ID](https://cdn.shopify.com/videos/c/o/v/82e4a485d5e646f598492681af61dbe7.mov))


## Prerequisites

Before you begin, you'll need the following:

- **Node.js**: [Download and install](https://nodejs.org/en/download/) Node.js if you haven't already.
- **Shopify Partner Account**: [Create an account](https://partners.shopify.com/signup) to develop and manage your Shopify apps.
- **Shopify CLI**: [Install the Shopify CLI](https://shopify.dev/docs/apps/tools/cli) to streamline app development.
- **Test Store**: Set up either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store) for testing purposes.

## Setup

1. **Clone the Repository**: Clone this repository to your local machine.

    ```bash
    git clone https://github.com/your-username/Bundle-Builder-Cart-Transform.git
    cd Bundle-Builder-Cart-Transform
    ```

2. **Install Dependencies**: Install the necessary packages using your preferred package manager.

    ```bash
    npm install
    ```

3. **Start Development Server**: Run the development server using Shopify CLI.

    ```bash
    shopify app dev
    ```

## Usage

### Frontend and Backend Overview

In this project, the logic is divided between the **frontend** and the **backend**.

- **Frontend**: The frontend is implemented in Shopify's Liquid template files, JavaScript, and CSS. This is where the user interacts with the bundle builder, selects products, and sees the bundle summary. The frontend files include the `templates/page.bundle-builder.liquid`, `templates/page.bundle-summary.liquid`, and the associated assets like `bundle-builder.js`, `bundle-builder-summary.js`, and `bundle-builder.css`.

- **Backend**: The backend logic is handled by a Shopify Cart Transform function, which processes the cart data, groups the selected products into a bundle, and applies a discount. This backend logic is implemented within the app extension files, specifically in `extensions/demo-cart-transform-extension/src/run.js` and `run.graphql`.

### Frontend Implementation

#### Templates

- **`templates/page.bundle-builder.liquid`**

  This file defines the frontend logic for the bundle builder, allowing users to select products step by step. It uses Shopify's Liquid templating language to display products and handle form submissions.

- **`templates/page.bundle-summary.liquid`**

  This template is used to display a summary of the bundle that the user has built. It lists all selected items and shows the total price.

#### Assets

- **`assets/bundle-builder.js`**

  This JavaScript file contains the logic for navigating between steps in the bundle builder, selecting product variants, and storing selected variants in the session storage.

- **`assets/bundle-builder-summary.js`**

  This script is responsible for rendering the bundle summary page, displaying the selected products with their images, titles, and variants.

- **`assets/bundle-builder.css`**

  Contains the styling for the bundle builder, including layout, product cards, buttons, and responsive design.

### Backend Implementation

#### Cart Transform Function

- **`extensions/demo-cart-transform-extension/src/index.js`**

  This file serves as the entry point for the cart transform function.

- **`extensions/demo-cart-transform-extension/src/run.graphql`**

  Defines the GraphQL query to fetch cart lines and their associated metafields, which are used to determine how products should be grouped into bundles.

- **`extensions/demo-cart-transform-extension/src/run.js`**

  Contains the main logic for grouping cart items based on a `bundle_component_reference` metafield and merging them into a single bundle line item with a discount applied.

### Key Concepts and Resources

- **[Shopify Bundles Documentation](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-customized-bundle):** Learn how Shopify enables the creation and management of product bundles in a store.
- **[Shopify Cart Transform API](https://shopify.dev/docs/api/functions/reference/cart-transform):** Detailed documentation on the Cart Transform API, explaining how to manipulate the contents of a cart before checkout.
- **[Understanding Shopify Metafields](https://shopify.dev/docs/api/functions/reference/cart-transform/graphql/common-objects/metafield):** Metafields are used to store and transfer custom data associated with Shopify resources, which is crucial for grouping products into bundles.
- **[GraphQL Reference for Cart Transform](https://shopify.dev/docs/api/functions/reference/cart-transform/graphql):** Learn about the GraphQL schema used in the Cart Transform API, including important objects like Cart, CartLine, and CartTransform.
- **[CartLineCost Object](https://shopify.dev/docs/api/functions/reference/cart-transform/graphql/common-objects/cartlinecost):** Learn about how cart line costs are calculated and adjusted in the Cart Transform API.
- **[MergeOperation Object](https://shopify.dev/docs/api/functions/reference/cart-transform/graphql/common-objects/mergeoperation):** Understand how to merge multiple cart lines into a single line item, which is crucial for creating bundles.
- **[MoneyV2 Object](https://shopify.dev/docs/api/functions/reference/cart-transform/graphql/common-objects/moneyv2):** This object represents monetary amounts in a cart and is used to handle pricing in bundles.
- **[Testing and Debugging Functions](https://shopify.dev/docs/apps/build/functions/test-debug-functions):** Shopify provides guidance on testing and debugging custom functions to ensure they work as expected.
- **[Shopify Functions Configuration](https://shopify.dev/docs/api/functions/configuration):** Learn how to configure Shopify Functions, including Cart Transform functions, for use in your store.

## Deployment

To deploy the app in production, you can follow [Shopify's deployment guide](https://shopify.dev/docs/apps/deployment/web). Make sure to set the environment variable `NODE_ENV=production`.


## Learning and Resources

- **Shopify Functions**: Explore [Shopify Functions](https://shopify.dev/docs/apps/build/functions) to understand how they enhance app capabilities.
- **Monitoring and Handling Errors**: Learn about [monitoring and handling errors](https://shopify.dev/docs/apps/build/functions/monitoring-and-errors) in Shopify Functions.

## Contributing

Feel free to fork this project, open issues, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

- [App authentication](https://shopify.dev/docs/apps/auth)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [App extensions](https://shopify.dev/docs/apps/app-extensions/list)
- [Shopify Functions](https://shopify.dev/docs/api/functions)
- [Getting started with internationalizing your app](https://shopify.dev/docs/apps/best-practices/internationalization/getting-started)
