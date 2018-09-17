const defaultState = () => {
  return JSON.stringify(
    {
      editTargetIndex: null,
      deleteTargetIndex: null,
      addModal: {
        name: '',
        ingredients: ''
      },
      editModal: {
        name: '',
        ingredients: ''
      },
      recipes: [
        {
          name: 'Pizza',
          ingredients: `300g strong bread flour,
          1 tsp instant yeast (from a sachet or a tub),
          1 tsp salt,
          1 tbsp olive oil (plus extra for drizzling),
          100ml passata,
          handful fresh basil or 1 tsp dried,
          1 garlic clove, crushed,
          125g ball mozzarella, sliced,
          handful grated or shaved parmesan (or vegetarian alternative),
          handful cherry tomatoes, halved,
          handful basil leaves (optional)`
        },
        {
          name: 'Chicken Tikka Masala',
          ingredients: `4 tbsp vegetable oil,
          25g butter,
          4 onions (roughly chopped),
          6 tbsp chicken tikka masala paste,
          2 red peppers, deseeded and cut into chunks,
          8 boneless, skinless chicken breasts, cut into 2½ cm cubes,
          2 x 400g cans chopped tomatoes,
          4 tbsp tomato purée,
          2-3 tbsp mango chutney,
          150ml double cream,
          150ml natural yogurt,
          chopped coriander leaves, to serve`
        },
        {
          name: 'Chocolate Brownies',
          ingredients: `185g unsalted butter,
          185g best dark chocolate,
          85g plain flour,
          40g cocoa powder,
          50g white chocolate,
          50g milk chocolate,
          3 large eggs,
          275g golden caster sugar`
        }
      ]
    }
  );
};

export default defaultState;
