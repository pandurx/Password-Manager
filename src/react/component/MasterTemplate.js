import * as React from 'react';
import * as MuiMaterial from '@mui/material';
import * as MuiDataGrid from '@mui/x-data-grid';
import {
    UseLocation,
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
  } from "react-router-dom";

// custom component
import Table from './Table';
import Navigation from './Navigation';
import Emails from '../routes/emails';
import Socials from '../routes/socials'

// mixin
import { 
    getInvoices, 
    getMenus, 
    getUser, 
    getTitle, 
    getAccounts
} from '../data';

class MasterTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: "Dummy",
            account: 1,
            gridPrimary: 12,
            gridSecondary: 0,
            accounts: getAccounts(),
            selectedAccount: {}
        }
    }

    

    render() {
        
        const handleContextChange = contex => {
            this.setState({context:contex})
        }

        const handleAccountSelect = contex => {
            if (this.state.account == contex) {
                this.setState({account:null, gridPrimary:12, gridSecondary:0})
            } else {
                this.setState({account:contex, gridPrimary:7, gridSecondary:5})
            }
            let item = this.state.accounts.data.find(x => x.Id == this.state.account);
            this.setState({selectedAccount: item });
        }
        

        const DrawerHeader = MuiMaterial.styled('div')(({ theme }) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
          }));
          //https://mui.com/system/properties/
        return (
            
            <MuiMaterial.Box sx={{ display: 'flex', pt: 5, color: 'primary.main' }}>
                <Navigation 
                    title={getTitle()}
                    user={getUser()}
                    menus={getMenus()}
                    handleContextChange={handleContextChange}
                />
               
                <MuiMaterial.Card elevation={0} component="main" sx={{ flexGrow: 1, pt: 3, color: 'primary.main' }}>
                    <MuiMaterial.CardContent>        
                        
                        <MuiMaterial.Unstable_Grid2 container spacing={2}>

                            <MuiMaterial.Unstable_Grid2 xs={this.state.gridPrimary}>
                            
                                <Table 
                                    title={this.state.context} 
                                    items={getAccounts()}
                                    handleAccountSelect={handleAccountSelect}
                                />
                            </MuiMaterial.Unstable_Grid2>

                            <MuiMaterial.Unstable_Grid2 xs={this.state.gridSecondary}>
                            
                                <MuiMaterial.Card>
                                    <MuiMaterial.CardHeader title={(getAccounts().data).find(x => x.Id == this.state.account).Title} />
                                    <MuiMaterial.CardContent>
                                        <MuiMaterial.Unstable_Grid2 container rowSpacing={1} xs={12}>
                                            <MuiMaterial.Unstable_Grid2 xs={12}>
                                                <MuiMaterial.TextField size="small" label="Title" value={this.state.selectedAccount.Title}></MuiMaterial.TextField>
                                            </MuiMaterial.Unstable_Grid2>
                                            <MuiMaterial.Unstable_Grid2 xs={12}>
                                                <MuiMaterial.TextField size="small" label="Username"></MuiMaterial.TextField>
                                            </MuiMaterial.Unstable_Grid2>
                                            <MuiMaterial.Unstable_Grid2 xs={12}>
                                                <MuiMaterial.TextField size="small" label="Password"></MuiMaterial.TextField>
                                            </MuiMaterial.Unstable_Grid2>
                                            <MuiMaterial.Unstable_Grid2 xs={12}>
                                                <MuiMaterial.TextField size="small" label="Url"></MuiMaterial.TextField>
                                            </MuiMaterial.Unstable_Grid2>
                                            <MuiMaterial.Unstable_Grid2 xs={12}>
                                                <MuiMaterial.TextField size="small" label="Notes"></MuiMaterial.TextField>
                                            </MuiMaterial.Unstable_Grid2>
                                        </MuiMaterial.Unstable_Grid2>

                                    </MuiMaterial.CardContent>
                                    <MuiMaterial.CardActions>
                                        <MuiMaterial.Button variant="outlined">Save</MuiMaterial.Button>
                                        <MuiMaterial.Button variant="outlined">Cancel</MuiMaterial.Button>
                                    </MuiMaterial.CardActions>
                                </MuiMaterial.Card>

                            </MuiMaterial.Unstable_Grid2>

                        </MuiMaterial.Unstable_Grid2>

                        {/* <MuiMaterial.Card sx={{ mt:3, mb: 3, color: 'text.primary', backgroundColor: 'info.main' }}>
                            <MuiMaterial.CardHeader title="Lorem Ipsum" />
                            <DrawerHeader />
                            
                            <Outlet/>

                            <BrowserRouter>
                                <Routes>
                                    <Route path="emails" element={<Emails />} />
                                    <Route path="socials" element={<Socials />} />
                                </Routes>
                            </BrowserRouter> 
                        </MuiMaterial.Card>

                        <MuiMaterial.Card sx={{ mt: 3, color: 'primary.main' }}>
                            <MuiMaterial.CardHeader title="Lorem Ipsum" />
                            <MuiMaterial.CardContent>
                                <MuiMaterial.Typography paragraph>
                                    {this.state.account}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                                    sapien faucibus et molestie ac.
                                </MuiMaterial.Typography>
                                <MuiMaterial.Typography paragraph>
                                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                                    posuere sollicitudin aliquam ultrices sagittis orci a.
                                </MuiMaterial.Typography>
                            </MuiMaterial.CardContent>
                            <MuiMaterial.CardActions>
                                <MuiMaterial.Button>Save</MuiMaterial.Button>
                                <MuiMaterial.Button>Cancel</MuiMaterial.Button>
                            </MuiMaterial.CardActions>
                        </MuiMaterial.Card> */}
                    </MuiMaterial.CardContent>

                </MuiMaterial.Card>
                
            </MuiMaterial.Box>
        );
    }
}
export default MasterTemplate;