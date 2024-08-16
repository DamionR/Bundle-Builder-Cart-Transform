export default function run(input) {
  const groupedItems = {};

  // Group items by their bundle_component_reference metafield value
  input.cart.lines.forEach((line) => {
    const metafieldValue = line.merchandise.metafield?.value;
    if (metafieldValue) {
      if (!groupedItems[metafieldValue]) {
        groupedItems[metafieldValue] = [];
      }
      groupedItems[metafieldValue].push(line);
    }
  });

  // Now create a single merge operation for all grouped items
  const operations = [
    {
      merge: {
        cartLines: Object.values(groupedItems).flat().map((line) => ({
          cartLineId: line.id,
          quantity: line.quantity,
        })),
        parentVariantId: "gid://shopify/ProductVariant/44018823430344", // Your actual variant ID
        title: "Bundle Dev", // Set the title of the bundle
        price: {
          percentageDecrease: {
            value: 75, // Apply the discount percentage
          },
        },
        image: {
          url: "https://cdn.shopify.com/s/files/1/0624/4617/4408/files/bundle_dev_image_improved.png?v=1723763883", // Your bundle image URL
        },
      },
    },
  ];

  return { operations };
}
