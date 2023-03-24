import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import App from "./App";
import Login from './components/login/Login';
import Chat from './components/chat/Chat';

configure({ adapter: new Adapter() });

describe("Login", () => {
    const mockSetter = jest.fn()
    it("should render login correctly", () => {
        shallow(<Login handleSetId={mockSetter} />);
    })

    it("should have a login class name", () => {
        const wrapper = shallow(<Login handleSetId={mockSetter} />);
        expect(wrapper.is('.login')).toBe(true);
    })

    it("should have a paragraph with className 'text'", () => {
        const wrapper = mount(<Login handleSetId={mockSetter} />);
        expect(wrapper.find('.text').length).toBe(1)
        expect(wrapper.find('.button').length).toBe(1)
        expect(wrapper.find('.text').text()).toBe("Thanks for having me! 😃")
    })
    
});

describe("Chat", () => {
    const mockSetter = jest.fn()

    it("should render chat correctly", () => {
        shallow(<Chat messages={[['dave', 'good']]} id="dave" handleSetMessages={mockSetter} loadOldMessages={mockSetter} />);
    })

    it("should have a chat className", () => {
        const wrapper = shallow(<Chat messages={[['dave', 'good']]} id="dave" handleSetMessages={mockSetter} loadOldMessages={mockSetter} />);
        expect(wrapper.is('.chat')).toBe(true)
    })

    it("should have all necessary parts", () => {
        const wrapper = mount(<Chat messages={[['dave', 'good']]} id="dave" handleSetMessages={mockSetter} loadOldMessages={mockSetter} />);
        expect(wrapper.find('.button').length).toBe(1)
        expect(wrapper.find('#base').length).toBe(1)
        expect(wrapper.find('.load-old').length).toBe(1)
        expect(wrapper.find('.message').length).toBe(1)
    })
})

describe("App", () => {
    const mockSetter = jest.fn()

    it("should render App correctly", () => {
        shallow(<App />)
    })
})
