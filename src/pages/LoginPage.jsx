import { Button } from "../components/Button/Button"
import { Heading } from "../components/Heading/Heading"
import { Input } from "../components/Input/Input"
import './LoginPage.css'

export const LoginPage = () => {
    return (
        <>
        <Heading text="Регистрация"/>
        <form action="">
          <Input inputPlaceholder={"Имя"} inputType={"text"}/>
          <Input inputPlaceholder={"Фамилия"} inputType={"text"}/>
          <Input inputPlaceholder={"Email"} inputType={"email"}/>
          <Input inputPlaceholder={"Номер Телефона"} inputType={"number"}/>
          <Input inputPlaceholder={"Пароль"} inputType={"password"}/>
          <Button />
        </form>
        </>
    )
}