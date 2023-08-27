import { useAuth } from "../../src/components/commons/hooks/customs/withAuth";
import CreateAccount from "../../src/components/units/creatAccount/CreateAccount.container";

export default function CreateAccou(): JSX.Element {
  useAuth();
  return <CreateAccount />;
}
