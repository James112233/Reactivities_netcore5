import React from "react";
import { toast } from "react-toastify";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import agent from "../../app/api/agent";
import useQuery from "../../app/common/util/hooks";

const RegisterSuccess = () => {
  const email = useQuery().get("email") as string;

  function handleconfirmEmailResend() {
    agent.Account.resendEmailConfirm(email)
      .then(() => {
        toast.success("Verification email resend - please check your email");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Segment placeholder textAlign="center">
      <Header icon color="green">
        <Icon name="check" />
        Successfully registered!
      </Header>
      <p>
        Please check your email (including junk box) for the verification email
      </p>
      {email && (
        <>
          <p>Didn't receive the email? Click the below button to resend</p>
          <Button
            primary
            onClick={handleconfirmEmailResend}
            content="Resend Email"
            size="huge"
          /> 
        </>
      )}
    </Segment>
  );
};
export default RegisterSuccess;
