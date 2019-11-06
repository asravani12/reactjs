import React ,{component} from 'react';
import './loginform.css'
class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username='',
            password='',
            email='',
            phonenumber='',
            address=''
        }
        render()
        {
            return(
                <from classname="headder">
                    <h1>LOGINFORM</h1>
                    <table className="loginform">
                     <tr>
                         <th>
                             <label>
                                 username:
                             </label>
                             <input type="text" classname="text-feild" placeholder="enter username"/>
                         </th>
                     </tr>
                     <br/>
                     <tr>
                         <th>
                             <label>
                                 password:
                             </label>
                             <input type="text" className="text-feild" placeholder="enter password"/>
                         </th>
                     </tr>
                    </table>
                    <input type="submit" value="button"/>
                </from>

            )
        }

        )
    }
}