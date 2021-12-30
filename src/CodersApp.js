import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./store/store";


export const CodersApp = () => { 

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
