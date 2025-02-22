import styles from "./AboutAndGuide.module.css"
import Navbar from "../../components/Navbar/Navbar"
export default function AboutAndGuide(props) {
    return (
        <div>
            <Navbar position="relative"></Navbar>


            <Show when={props.url == "about"}>
                
            </Show>
            <Show when={props.url == "guide"}>

            </Show>
            



        </div>
    )
}