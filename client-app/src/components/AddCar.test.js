import AddCar from "./AddCar";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<AddCar />", () => {
  it("renders five <TextInput /> components", () => {
    const wrapper = shallow(<AddCar />);
    expect(wrapper.find("TextField")).toHaveLength(5);
  });
});
