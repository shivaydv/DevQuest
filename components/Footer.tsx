
const Footer = () => {

  return (
    <footer className=" container px-2">
      <div className=" flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={"https://twitter.com/shivay1256"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Shiva Yadav
          </a>
          . The source code is available on{" "}
          <a
            href={
              "https://github.com/shivaydv/DevQuest"
            }
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer