/**
 * @author Daniel Correa <dcorreab@eafit.edu.co>
 */
import { ConfigApp } from './ConfigApp';

const module = {
    namespaced: true,

    state: { 
        configApp: new ConfigApp(
            "400px",
            "navy",
            "flex",
            ["feature","component","binding_feature_component"],
            "{}"),
    },

    getters: { 
        initializeConfigApp: (state:any) => {
            const localConfigAppJSON = localStorage.getItem('variamosConfigApp');
            if(typeof localConfigAppJSON === 'string') {
                let genericProjects = JSON.parse(localConfigAppJSON);
                let configAppNew = ConfigApp.objectToThisClass(genericProjects);
                state.configApp = configAppNew;
            }
            return state.configApp;
        },
        getConfigApp: (state:any) => {
            return state.configApp;
        },
    },

    mutations: {
        setConfigApp (state:any, configApp:ConfigApp) {
            state.configApp = configApp;
            localStorage.setItem('variamosConfigApp', JSON.stringify(state.configApp));
        },
    },
}

export default module;