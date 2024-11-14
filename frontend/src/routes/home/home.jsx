import './home.css';
import { Button, Flex} from "@chakra-ui/react";
import { EmptyState } from "../../components/ui/empty-state"
import { MdOutlineLibraryAdd } from "react-icons/md";

function Home() {

  return (
    <>
      <Flex>
        <EmptyState icon={<MdOutlineLibraryAdd />}
          title="Start adding tokens"
          description="Add a new design token to get started">
          <Button>Create Task</Button>
        </EmptyState>
      </Flex>

      
      
      
    </>
  );
}

export default Home;
