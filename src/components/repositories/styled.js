import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 14px;
  width: 100%;
  color: #808080;
  font-weight: bold; 
  margin-top: 16px;
  margin-left: 200px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1.8px solid #808080;
  text-color: #808080;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#808080";
  margin: 10px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#808080";
  display: none;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;