import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.map((p) => p.status === 2);
  

  const balance = acceptedProposals.filter((acc , curr) => acc +curr.price ,);

  //proposals => price => acceptedProposals =>  calculate total price 


  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="darkhast ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="darkhaste های واگذار شده"
        value={acceptedProposals}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="Waellet ها"
        value={balance}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;