import { Input } from "@nextui-org/react";
import { Mail } from "../Icons/MailIcon";
import { Password } from "../Icons/PasswordIcon";

function LoginForm() {
  return (
    <>
 
   <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              aria-label='email'
              contentLeft={<Mail fill="currentColor" />}
            />
 
          <Input
          css={{mt:'1rem'}}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            aria-label='password'
            contentLeft={<Password fill="currentColor" />}
          />
    </>
  )
}

export default LoginForm