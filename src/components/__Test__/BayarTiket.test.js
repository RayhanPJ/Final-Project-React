import React from "react";
import { create } from "react-test-renderer";
import BayarTiket  from "../BayarTiket/index";

const FirstPage = create(<BayarTiket />);

it("Snapshot Landing Page", () => {
  expect(FirstPage).toMatchSnapshot();
});
