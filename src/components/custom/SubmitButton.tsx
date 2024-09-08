import React, { ReactNode } from "react";
import { Button } from "../ui/button";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <Button disabled={isSubmitting}>
      {isSubmitting ? "Submitting" : "Submit"}
    </Button>
  );
};

export default SubmitButton;
