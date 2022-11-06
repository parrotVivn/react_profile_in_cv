import { useTheme, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppProvider } from '../store/_hookReducerStore/app';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Outlet } from 'react-router';

const Tabmain: React.FC<React.HTMLProps<HTMLDivElement>> = ({
    ...others
}) => {
    const theme = useTheme();
    const { state, dispatch } = React.useContext(AppProvider)
    const { t } = useTranslation();




    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (<React.Fragment>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item Two" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Two" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Outlet></Outlet>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box >
    </React.Fragment >)

}

export default Tabmain;
