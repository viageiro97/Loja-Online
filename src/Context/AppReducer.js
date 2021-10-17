function appReducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        if(action.payload.quant<1){
          console.log("Quantia menor de zero")
          return {
            ...state, 
            snackBar:{
              open: true,
              message: "Seleccione a Quantidade desejada",
              severity: "error"
            }
          }
        }

      if(!state.cart.lenght){
        return {
          ...state, 
          cart:[action.payload],
          snackBar:{
            open: true,
            message: "Item adicionado com sucesso",
            severity: "success"
          }
        }
      }

        const newCart = state.cart.map((item)=>{
          if(item.id===action.payload.id){
            return action.payload
          }
          return item;
        })

        return {
          ...state, 
          cart:newCart,
          snackBar:{
            open: true,
            message: "Item adicionado com sucesso",
            severity: "success"
          }
        };

      case 'REMOVE_ITEM':
        return {...state, 
          cart: state.cart.filter((item)=>item.id!==action.payload),
          snackBar:{
            open: true,
            message: "Item Removido",
            severity: "success"
          }
        };

      case 'NOT_IMPLEMENTED':
        return {...state,
          snackBar:{
            open: true,
            message: "Funcionalidade em Desenvolvimento!",
            severity: "info"
          }
        };
      case 'CLOSE_SNACK':
        return {...state, 
          snackBar:{
            open: false, 
            message: "", 
            severity: "info"}
        };
    
      default:
        throw new Error();
    }
  }

export default appReducer;