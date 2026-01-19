interface Props {
  naam: string;
  soort: string;
  onClickBtn: () => void;
}

function Oef2({ naam, soort, onClickBtn }: Props) {
  return (
    <>
      <button type="button" className={`btn ${soort}`} onClick={onClickBtn}>
        {naam}
      </button>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </>
  );
}

export default Oef2;
