type Props = {
  districName: string;
};

const DistrictCard = ({ districName }: Props) => {
  return (
    <span key={districName} className='badge bg-dark me-2 mb-2 fs-6'>
      {districName}
    </span>
  );
};

export default DistrictCard;
