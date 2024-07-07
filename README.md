git fetch //this gets all current branches
git pull // pulls your current branch
git add . // will add all changes
git commit -m "message" // commits the changes to push
git push // pushes to your current branch
git pull origin master //pulls master into your current branch

Coding Tools & IDE Setup –
	For ease of development, IntelliJ is the suggested IDE for all group members to use for our Dynamic Portfolio project. Versioning control is handled through the use of a GitHub project; each team member is responsible for creating a branch to work on a specific feature that is then merged into the master branch once reviewed. The project will be built using a PERN stack with the following breakdown:
 
	Postgres – For the relational database which will store user data and facilitate sessions and authentication. 
	ExpressJS -  Back-end framework
	React – Front-end framework
	Node.js – Back-end platform

The supporting code for the project is handled by the Node Packet Manager (npm). Using the ‘package.json’ file located in the root of the project directory, the required library code will be automatically installed once the command “npm install”. In this manner, there are minimal steps needed by a prospective user to get the servers up and running.

Our project utilizes Git/Github for our version control system. All updates, deletions, new features, etc. will be added to the dynamic portfolio project through the Portfolio repository found here https://github.com/Skrubs/portfolio. From this Github page group members will be able to get the most updated version of the project, create branches, write code, commit changes, and merge them into master. The use of version control allows for simultaneous work, organization of changes, rollback of problematic code, and availability of the application to occur. Git/Github is a key collaboration tool for our entire capstone project.

We have organized in a way we can pass both the server and the client in a single repository. The back-end application programmable interfaces (API) calls are located in the directory server which handles all the calls to and from the postgres database. This includes the creation of the database, adding and deleting users, updating their information or modifying what projects they have under their account, as well as querying the database based on specific user input provided by the front-end. The back-end also handles user authentication and session logging.
