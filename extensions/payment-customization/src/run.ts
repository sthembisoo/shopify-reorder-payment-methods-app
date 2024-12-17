// @ts-check

// Use JSDoc annotations for type safety
/**
* @typedef {import("../generated/api").RunInput} RunInput
* @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
*/

/**
* @type {FunctionRunResult}
*/
const NO_CHANGES = {
  operations: [],
};

// The configured entrypoint for the 'purchase.payment-customization.run' extension target
/**
* @param {RunInput} input
* @returns {FunctionRunResult}
*/
export function run(input) {
  // Find Bob Pay and move it to the top
  const reorderPaymentMethod = input.paymentMethods
    .find(method => method.name.includes("Bob Pay"));

    if (!reorderPaymentMethod) {
      return NO_CHANGES;
    }
  
  // The @shopify/shopify_function package applies JSON.stringify() to the function result
  // and writes it to STDOUT
  return {
    operations: [{
      move: {
      index: 0,
      paymentMethodId: reorderPaymentMethod.id
      }
    }]
  };
};