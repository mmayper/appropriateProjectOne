using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
//we need these to talk to mysql
using MySql.Data;
using MySql.Data.MySqlClient;
// and we need this to manipulate data from a db
using System.Data;


namespace TheActualQuoteApplication
{
    /// <summary>
    /// Summary description for QuoteService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class QuoteService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            //here we are grabbing that connections tring from our web.config file
            string sqlConnectString = System.Configuration.ConfigurationManager.ConnectionStrings["appropriate_test"].ConnectionString;
            //here's our query.  A basic select with nothing fancy.
            string sqlSelect = "SELECT * from quotes";

            //set up our connection object to be ready to use our connection string
            MySqlConnection sqlConnection = new MySqlConnection(sqlConnectString);
            //set up our command object to use our connection, and our query
            MySqlCommand sqlCommand = new MySqlCommand(sqlSelect, sqlConnection);

            //a data adapter actls like a bridge between our command object and
            //the data we are trying to get back and put in a table object
            MySqlDataAdapter sqlDa = new MySqlDataAdapter(sqlCommand);
           
            //here's the table we want to fill with the results from our query
            DataTable sqlDt = new DataTable();
            
            //here we go filling it!
            sqlDa.Fill(sqlDt);

            string someText = "";

            foreach (DataRow row in sqlDt.Rows)
            {
                string QuoteID = row["QuoteID"].ToString();
                string Text = row["quoteText"].ToString();
                string Author = row["author"].ToString();
                string Rating = row["rating"].ToString();

                someText +=  QuoteID + " " + Text + " " + Author + " " + Rating +"<br/>";
            }

            return someText;

            //return the number of rows we have, that's how many accounts are in the system!
            //return sqlDt.Rows.ToString();
        }
    }
}
