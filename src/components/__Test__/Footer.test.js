import React from "react";
import { create } from "react-test-renderer";
import Footer  from "../Footer";

const FirstPage = create(<Footer />);

it("Snapshot Landing Page", () => {
  expect(FirstPage).toMatchSnapshot();
});
