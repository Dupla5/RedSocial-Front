import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {LoginScreen} from '../components/login/LoginScreen';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    auth:{},
    ui:{
        loading:false,
        msgError: null
    }
};
let store = mockStore(initialState);


const wrapper = mount(
    <Provider store={store}> 
    <MemoryRouter>
    <LoginScreen/>

        </MemoryRouter> 
    </Provider>

)

describe('Pruebas en LoginScreen', () => {

    beforeEach(() =>{
        store = mockStore(initialState);
    })

    test('debe de mostrarse correctamente', () => {
      
        expect(wrapper).toMatchSnapshot();
    });
    
})