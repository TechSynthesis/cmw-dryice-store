const MedusaCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-1">
        <a
          className=" text-xs"
          href="https://www.techinverted.com"
          target="_blank"
          rel="noreferrer"
        >
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return <>Powered by TechInverted</>
}

export default MedusaCTA
