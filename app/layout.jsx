import Nav from "@/components/Nav";
import NavFooter from "@/components/NavFooter";
import "@/styles/globals.css";


export const metadata = {
    title: "maq_2",
    description: "Made By Manassé AKPOVI"
}

const Rootlayout = ({children}) => {
  return (

    <html lang="en">
    <head>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      <link href='https://fonts.googleapis.com/css?family=Fjalla One' rel='stylesheet'></link>
      <script src="https://kit.fontawesome.com/eda0842a66.js" crossorigin="anonymous"></script>

    </head>
    <body>
        <div>
            <Nav/>
            {children}
            <NavFooter/>
        </div>
    </body>
    </html>
  )
}

export default Rootlayout
