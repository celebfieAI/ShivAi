import Tippy from "@/components/Base/Tippy";
import Lucide from "@/components/Base/Lucide";
import { FormInput, FormCheck } from "@/components/Base/Form";
import users from "@/fakers/users";
import _ from "lodash";

function Main() {


    return (
      <>
        <div className="p-5 box box--stacked md:w-2/5 w-full ">
              <div className="relative">
                <FormInput
                  type="text"
                  className="pr-11"
                  rounded
                  placeholder="Search members..."
                />
                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-11">
                  <Lucide
                    icon="Search"
                    className="stroke-[1.3] w-4 h-4 text-slate-400"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3.5 gap-2">
                {_.take(users.fakeUsers(), 20).map((faker, fakerKey) => (
                  <div
                    className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5"
                    key={fakerKey}
                  >
                    <div>
                      <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                        <img
                          alt="Tailwise - Admin Dashboard Template"
                          src={faker.photo}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{faker.name}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {faker.position}
                      </div>
                    </div>
                    <div className="flex gap-2.5 ml-auto">
                      <Tippy
                        as="a"
                        className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                        content="Call"
                      >
                        <Lucide
                          icon="Phone"
                          className="w-3 h-3 text-primary fill-primary/10"
                        />
                      </Tippy>
                      <Tippy
                        as="a"
                        className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                        content="Send a message"
                      >
                        <Lucide
                          icon="Mail"
                          className="w-3 h-3 text-primary fill-primary/10"
                        />
                      </Tippy>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
      </>
    );
  }
  
  export default Main;
  