import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import { FormCheck, FormInput, FormHelp, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import Alert from "@/components/Base/Alert";
import clsx from "clsx";
import _ from "lodash";





import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import {
  FormLabel,
  FormTextarea,
  FormSwitch,

} from "@/components/Base/Form";

import { Slideover } from "@/components/Base/Headless";





import FileIcon from "@/components/Base/FileIcon";

import activities from "@/fakers/activities";

import messages from "@/fakers/messages";
import events from "@/fakers/events";
import projectDetails from "@/fakers/project-details";
import achievements from "@/fakers/achievements";

import { Tab } from "@/components/Base/Headless";
import ImageZoom from "@/components/Base/ImageZoom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



function Main() {

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [headerFooterSlideoverPreview, setHeaderFooterSlideoverPreview] =
    useState(false);

  useEffect(() => {
    if (queryParams.get("page") == "events") {
      setSelectedIndex(1);
    } else if (queryParams.get("page") == "achievements") {
      setSelectedIndex(2);
    } else if (queryParams.get("page") == "contacts") {
      setSelectedIndex(3);
    } else if (queryParams.get("page") == "default") {
      setSelectedIndex(4);
    } else {
      setSelectedIndex(0);
    }
  }, [search]);


  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Agents
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">

          </div>
        </div>


        <div className="flex gap-8 md:flex-row flex-col">

          <div className="flex flex-col md:w-[25%]">

            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent mb-4"
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                setHeaderFooterSlideoverPreview(true);
              }}
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Add New Agent
            </Button>

            <Slideover
              staticBackdrop
              open={headerFooterSlideoverPreview}
              onClose={() => {
                setHeaderFooterSlideoverPreview(false);
              }}
            >
              {/* BEGIN: Slide Over Header */}
              <Slideover.Panel>
                <a
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setHeaderFooterSlideoverPreview(false);
                  }}
                  className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                  href="#"
                >
                  <Lucide
                    icon="X"
                    className="w-8 h-8 text-slate-400"
                  />
                </a>
                <Slideover.Title>
                  <Lucide
                    icon="UserPlus"
                    className="block mr-2"
                  />
                  <h2 className="mr-auto text-base font-bold">
                    Create your Agent
                  </h2>


                </Slideover.Title>
                {/* END: Slide Over Header */}
                {/* BEGIN: Slide Over Body */}
                <Slideover.Description>

                  <h4 className="font-bold">Choose a template</h4>
                  <p className="mt-2 mb-2">Here are the templates to get you started, or you can create your own template and use it to create a new agent.</p>
                  <hr className="" />
                  <div className="mt-3 mb-8 font-bold">
                    <FormLabel htmlFor="modal-form-3">
                      Agent Name  <span className="text-yellow-800 font-medium text-xs">(This can be adjusted at any time after creation.)</span>
                    </FormLabel>
                    <FormInput
                      id="modal-form-3"
                      type="text"
                      placeholder="New Agent"
                    />
                  </div>

                  <Alert variant="primary">
                    <div className="flex gap-6 cursor-pointer">
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-1">
                        <Lucide
                          icon="PlusCircle"
                          className="block mx-auto"
                        />
                      </div>
                      <div>
                        <div className="flex items-center">

                          <div className="text-lg font-medium">
                            Blank Template
                          </div>

                        </div>
                        <div className="mt-1 text-xs">
                          This is a blank slate template with minimal configurations. It's a starting point for creating your custom agent.
                        </div>
                      </div>
                    </div>
                  </Alert>

                  <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                    <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                      <div className="-mt-px">Quickstart</div>
                    </div>

                    <div className="pt-8 pb-8 pr-2 pl-2 gap-4 flex flex-col">

                      <Alert variant="secondary">
                        <div className="flex gap-6 cursor-pointer">
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-1">
                            <Lucide
                              icon="PlusCircle"
                              className="block mx-auto"
                            />
                          </div>
                          <div>
                            <div className="flex items-center">

                              <div className="text-lg font-medium">
                                Lead Filtering Agent
                              </div>

                            </div>
                            <div className="mt-1 text-xs">
                              This Agent is designed for efficiently filtering leads. It streamlines the process by automatically identifying and shortlisting potential leads based on given criteria. "Celebfie", a Celebrity booking agency optimizes their lead management process, ensuring that only the most promising prospects are shortlisted for further engagement and conversion.
                            </div>
                          </div>
                        </div>
                      </Alert>

                      <Alert variant="secondary">
                        <div className="flex gap-6 cursor-pointer">
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-1">
                            <Lucide
                              icon="PlusCircle"
                              className="block mx-auto"
                            />
                          </div>
                          <div>
                            <div className="flex items-center">

                              <div className="text-lg font-medium">
                                Lead Conversion Agent (Real estate)
                              </div>

                            </div>
                            <div className="mt-1 text-xs">
                              This Agent is designed to help "Investment Dr", a real estate company to convert potential leads into buyers or investors using personalized communication and CRM integration.
                            </div>
                          </div>
                        </div>
                      </Alert>

                      <Alert variant="secondary">
                        <div className="flex gap-6 cursor-pointer">
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-1">
                            <Lucide
                              icon="PlusCircle"
                              className="block mx-auto"
                            />
                          </div>
                          <div>
                            <div className="flex items-center">

                              <div className="text-lg font-medium">
                                Recruitment Screening Agent
                              </div>

                            </div>
                            <div className="mt-1 text-xs">
                              This Agent is designed for resume screening, shortlisting candidates based on job requirements. It provides "Technology Tigers" (a Tech Startup) detailed analysis for informed decision-making by their HR teams.
                            </div>
                          </div>
                        </div>
                      </Alert>

                      <Alert variant="secondary">
                        <div className="flex gap-6 cursor-pointer">
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2 mt-1">
                            <Lucide
                              icon="PlusCircle"
                              className="block mx-auto"
                            />
                          </div>
                          <div>
                            <div className="flex items-center">

                              <div className="text-lg font-medium">
                                Customer Engagement Agent (E-commerce)
                              </div>

                            </div>
                            <div className="mt-1 text-xs">
                              This Agent is designed to be versatile and capable of handling inbound inquiries with efficiency and personalization. It assists customers of "Farm-2-Folk" an Organic produce e-com platform in helping its customers do product bookings, provides personalized recommendations, facilitates returns or exchanges, notifies about special offers, addresses delivery queries, and resolves issues with any of the above.
                            </div>
                          </div>
                        </div>
                      </Alert>

                    </div>

                  </div>




                </Slideover.Description>
                {/* END: Slide Over Body */}
                {/* BEGIN: Slide Over Footer */}
                <Slideover.Footer>

                  <Button
                    variant="primary"
                    type="button"
                    className="w-full"
                  >
                    Create Agent
                  </Button>
                </Slideover.Footer>
              </Slideover.Panel>
              {/* END: Slide Over Footer */}
            </Slideover>

            <div className="flex flex-col box box--stacked">

              <div className="overflow-auto xl:overflow-visible">
                <Table className="border-b border-slate-200/60">
                  {/* <Table.Thead>
          <Table.Tr>
            
            <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
              Name
            </Table.Td>
          
           
          </Table.Tr>
        </Table.Thead> */}
                  <Table.Tbody>
                    {_.take(users.fakeUsers(), 20).map((faker, fakerKey) => (
                      <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">

                        <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                          <div className="flex items-center">
                            {/* <div className="w-9 h-9 image-fit zoom-in">
                    <Tippy
                      as="img"
                      alt="Tailwise - Admin Dashboard Template"
                      className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                      src={faker.photo}
                      content={faker.name}
                    />
                  </div> */}
                            <div className="ml-3.5">
                              <a
                                href=""
                                className="font-medium whitespace-nowrap"
                              >
                                {faker.name}
                              </a>
                              <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                                {faker.email}
                              </div>
                            </div>
                          </div>
                        </Table.Td>

                        {/* <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                <div className="flex items-center justify-center">
                  <Menu className="h-5">
                    <Menu.Button className="w-5 h-5 text-slate-500">
                      <Lucide
                        icon="MoreVertical"
                        className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide
                          icon="CheckSquare"
                          className="w-4 h-4 mr-2"
                        />{" "}
                        Edit
                      </Menu.Item>
                      <Menu.Item className="text-danger">
                        <Lucide
                          icon="Trash2"
                          className="w-4 h-4 mr-2"
                        />
                        Delete
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </Table.Td> */}
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
              {/* <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
      <Pagination className="flex-1 w-full mr-auto sm:w-auto">
        <Pagination.Link>
          <Lucide icon="ChevronsLeft" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronLeft" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Link active>2</Pagination.Link>
        <Pagination.Link>3</Pagination.Link>
        <Pagination.Link>...</Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronRight" className="w-4 h-4" />
        </Pagination.Link>
        <Pagination.Link>
          <Lucide icon="ChevronsRight" className="w-4 h-4" />
        </Pagination.Link>
      </Pagination>
   
    </div> */}
            </div>
          </div>


          <div className="grid grid-cols-12 gap-y-10 gap-x-6  md:w-[75%]">
            <div className="col-span-12">
              <div className="p-1.5 box flex flex-col box--stacked">
                <div className="h-48 relative w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                  <div
                    className={clsx([
                      "w-full h-full relative overflow-hidden",
                      "before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem]",
                      "after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]",
                    ])}
                  ></div>
                  <div className="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-24">
                    <div className="w-full h-full overflow-hidden border-[6px] box border-white rounded-full image-fit">
                      <img
                        alt="Tailwise - Admin Dashboard Template"
                        src={users.fakeUsers()[0].photo}
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 mb-2.5 mr-2.5 border-2 border-white rounded-full bg-success box"></div>
                  </div>
                </div>
                <div className="rounded-[0.6rem] bg-slate-50 pt-12 pb-6">
                  <div className="flex items-center justify-center text-xl font-medium">
                    {users.fakeUsers()[0].name}
                    <Lucide
                      icon="BadgeCheck"
                      className="w-5 h-5 ml-2 text-blue-500 fill-blue-500/30"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 gap-x-5 mt-2.5">

                    <Tippy
                      as="a"
                      className="flex items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                      content={users.fakeUsers()[0].phone}
                    >
                      <Lucide
                        icon="Phone"
                        className="w-4 h-4 text-primary fill-primary/5"
                      />
                    </Tippy>

                    <div className="flex gap-3 w-2/5">
                      <FormInput
                        type="text"
                        placeholder="everyone@gmail.com"
                        value="https://left4code.com/invitation?token=abcdefgh12345678"
                        disabled
                        className="text-slate-500"
                      />
                      <Tippy
                        content="Copy link"
                        as={Button}
                        variant="outline-secondary"
                      >
                        <Lucide icon="Copy" className="w-4 h-4 stroke-[1.5]" />
                      </Tippy>
                    </div>

                  </div>


                </div>
              </div>
              <Tab.Group
                className="mt-10"
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
              >


                <div className="flex justify-between gap-4 mb-8">
                  <div className="relative col-span-12 row-start-1 xl:col-start-9 xl:col-span-4 w-full">
                    <div className="sticky flex flex-col top-[6.2rem] gap-y-7">
                      <div className="flex flex-col p-5 box box--stacked">
                        <div>Complete your profile (83%)</div>
                        <div className="flex h-2 mt-3.5">
                          <div className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[60%]"></div>
                          <div className="h-full first:rounded-l last:rounded-r border border-slate-300 bg-slate-100 w-[40%]"></div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="relative col-span-12 row-start-1 xl:col-start-9 xl:col-span-4 w-full">
                    <div className="sticky flex flex-col top-[6.2rem] gap-y-7">
                      <div className="flex flex-col p-5 box box--stacked">
                        <div>Complete your profile (83%)</div>
                        <div className="flex h-2 mt-3.5">
                          <div className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[60%]"></div>
                          <div className="h-full first:rounded-l last:rounded-r border border-slate-300 bg-slate-100 w-[40%]"></div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>




                <div className="flex flex-col 2xl:items-center 2xl:flex-row gap-y-3">
                  <Tab.List
                    variant="boxed-tabs"
                    className="flex-col sm:flex-row w-full 2xl:w-auto mr-auto bg-white box rounded-[0.6rem] border-slate-200"
                  >
                    <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                        as="button"
                      >
                        Profile
                      </Tab.Button>
                    </Tab>
                    <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                        as="button"
                      >
                        Events
                        <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full text-theme-1/70 bg-theme-1/10 border-theme-1/10">
                          7
                        </div>
                      </Tab.Button>
                    </Tab>
                    <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                        as="button"
                      >
                        Achievements
                      </Tab.Button>
                    </Tab>
                    <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                        as="button"
                      >
                        Contacts
                        <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full text-theme-1/70 bg-theme-1/10 border-theme-1/10">
                          5
                        </div>
                      </Tab.Button>
                    </Tab>
                    <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                      <Tab.Button
                        className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                        as="button"
                      >
                        Default
                      </Tab.Button>
                    </Tab>
                  </Tab.List>

                </div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="flex flex-col p-5 box box--stacked mt-3.5">
                      <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                        <p>Model</p>
                        <p className="text-xs">This section allow you to configure the model for the assistant</p>
                      </div>

                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 pb-7 border-slate-200/80   h-full w-full bg-secondary bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-100  border-gray-100">

                        <div className="px-5 py-2 mt-4 flex flex-row gap-3.5">

                          <div id="form-section" className="w-[70%]">
                            <div>
                              <FormLabel htmlFor="regular-form-1">
                                Input Text
                              </FormLabel>
                              <FormInput
                                id="regular-form-1"
                                type="text"
                                placeholder="Input text"
                              />
                            </div>

                            <div>
                              <FormLabel htmlFor="regular-form-1" className="mt-4">
                                Input Text
                              </FormLabel>
                              <FormTextarea
                                id="regular-form-1"

                                placeholder="Input text"

                              />
                            </div>
                          </div>

                          <div id="options" className="w-[30%] flex flex-col gap-4">

                            <div>

                              <p>Provider</p>

                              <FormSelect
                                className="mt-2 sm:mr-2"
                                aria-label="Default select example"
                              >
                                <option>Chris Evans</option>
                                <option>Liam Neeson</option>
                                <option>Daniel Craig</option>
                              </FormSelect>


                            </div>

                            <div>

                              <p>Model</p>

                              <FormSelect
                                className="mt-2 sm:mr-2"
                                aria-label="Default select example"
                              >
                                <option>Chris Evans</option>
                                <option>Liam Neeson</option>
                                <option>Daniel Craig</option>
                              </FormSelect>


                            </div>

                            <div>

                              <p>Knowledge Base</p>

                              <FormSelect
                                className="mt-2 sm:mr-2"
                                aria-label="Default select example"
                              >
                                <option>Chris Evans</option>
                                <option>Liam Neeson</option>
                                <option>Daniel Craig</option>
                              </FormSelect>


                            </div>



                            <div>

                              <p>Temprature</p>

                              <input type="range"  className="w-full h-2  rounded-lg cursor-pointer range-slider"/>


                            </div>

                            <div>
                              <FormLabel htmlFor="regular-form-1">
                               Max Tocken
                              </FormLabel>
                              <FormInput
                                id="regular-form-1"
                                type="text"
                                placeholder="Input text"
                              />
                            </div>


                           <div >
                           <FormSwitch className="w-full mt-3   sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 "
                        >
                          Detect Emotion
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          
                          className="ml-20 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                           </div>

                          </div>




                        </div>
                      </div>

                    </div>

                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                      {_.take(events.fakeEvents(), 20).map((faker, fakerKey) => (
                        <div
                          className="flex flex-col col-span-12 p-5 md:col-span-6 xl:col-span-4 box box--stacked"
                          key={fakerKey}
                        >
                          <a
                            className="font-medium text-primary text-[0.94rem]"
                            href=""
                          >
                            {faker.title}
                          </a>
                          <div className="mt-1 mb-5 leading-relaxed text-slate-500">
                            {faker.description}
                          </div>
                          <Menu className="absolute top-0 right-0 mt-5 mr-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                                Link
                              </Menu.Item>
                              <Menu.Item>
                                <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                                Delete
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                          <div className="flex flex-col gap-3 pt-5 mt-auto border-t border-dashed border-slate-300/70">
                            <div className="flex items-center">
                              <div className="text-slate-500">Organizer:</div>
                              <div className="ml-auto">
                                <div className="flex items-center text-xs rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px">
                                  <span className="-mt-px">{faker.organizer}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-slate-500">Available Seats:</div>
                              <div className="ml-auto">
                                <div className="flex items-center">
                                  <Lucide
                                    icon="Armchair"
                                    className={clsx([
                                      "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                      { active: faker.availableSeats >= 1 },
                                    ])}
                                  />
                                  <Lucide
                                    icon="Armchair"
                                    className={clsx([
                                      "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                      { active: faker.availableSeats >= 2 },
                                    ])}
                                  />
                                  <Lucide
                                    icon="Armchair"
                                    className={clsx([
                                      "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                      { active: faker.availableSeats >= 3 },
                                    ])}
                                  />
                                  <Lucide
                                    icon="Armchair"
                                    className={clsx([
                                      "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                      { active: faker.availableSeats >= 4 },
                                    ])}
                                  />
                                  <Lucide
                                    icon="Armchair"
                                    className={clsx([
                                      "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                      { active: faker.availableSeats >= 5 },
                                    ])}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-slate-500">Time:</div>
                              <div className="ml-auto text-slate-500">
                                {faker.time}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-slate-500">Attendees:</div>
                              <div className="ml-auto">
                                <div className="flex items-center justify-center">
                                  <div className="w-6 h-6 image-fit zoom-in">
                                    <Tippy
                                      as="img"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="border-2 border-white rounded-full"
                                      src={faker.attendees[0].photo}
                                      content={`Uploaded at ${faker.attendees[0].name}`}
                                    />
                                  </div>
                                  <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                    <Tippy
                                      as="img"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="border-2 border-white rounded-full"
                                      src={faker.attendees[1].photo}
                                      content={`Uploaded at ${faker.attendees[1].name}`}
                                    />
                                  </div>
                                  <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                    <Tippy
                                      as="img"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="border-2 border-white rounded-full"
                                      src={faker.attendees[2].photo}
                                      content={`Uploaded at ${faker.attendees[2].name}`}
                                    />
                                  </div>
                                  <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                                    <Tippy
                                      as="img"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="border-2 border-white rounded-full"
                                      src={faker.attendees[3].photo}
                                      content={`Uploaded at ${faker.attendees[3].name}`}
                                    />
                                  </div>
                                  <div className="ml-1 text-slate-500">
                                    ({_.random(20, 100)}+)
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="text-slate-500">Registration Link:</div>
                              <div className="ml-auto">
                                <a
                                  href=""
                                  className="text-slate-500 whitespace-nowrap underline decoration-dotted decoration-slate-500/30 underline-offset-[3px] truncate w-40 md:w-52 block text-right"
                                >
                                  {faker.registrationLink}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                      {_.take(achievements.fakeAchievements(), 9).map(
                        (faker, fakerKey) => (
                          <div
                            className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 box box--stacked"
                            key={fakerKey}
                          >
                            <div className="flex mt-5 ml-5">
                              <span className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-2 py-0.5 mr-auto">
                                <span className="-mt-px">{faker.category}</span>
                              </span>
                            </div>
                            <Menu className="absolute top-0 right-0 mt-5 mr-5">
                              <Menu.Button className="w-5 h-5 text-slate-500">
                                <Lucide
                                  icon="MoreVertical"
                                  className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                                />
                              </Menu.Button>
                              <Menu.Items className="w-40">
                                <Menu.Item>
                                  <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                                  Link
                                </Menu.Item>
                                <Menu.Item>
                                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                                  Delete
                                </Menu.Item>
                              </Menu.Items>
                            </Menu>
                            <div className="flex flex-col items-center px-5 pb-10 mt-5">
                              <div className="relative w-[72px] h-[72px]">
                                <div className="flex items-center justify-center w-full h-full overflow-hidden border rounded-full border-slate-200/70 bg-theme-1/5">
                                  <Lucide
                                    icon={faker.event.icon}
                                    className="w-6 h-6 text-theme-1 fill-theme-1/10 stroke-[0.7]"
                                  />
                                </div>
                              </div>
                              <div className="mt-3 font-medium text-primary text-[0.94rem]">
                                {faker.title}
                              </div>
                              <div className="mt-1.5 text-center text-slate-500">
                                {faker.description}
                              </div>
                              <div className="mt-5 text-xs uppercase text-slate-400">
                                Collaborators
                              </div>
                              <div className="flex justify-center mt-3">
                                <div className="w-10 h-10 image-fit zoom-in">
                                  <Tippy
                                    as="img"
                                    alt="Tailwise - Admin Dashboard Template"
                                    className="border-2 border-white rounded-full"
                                    src={faker.collaborators[0].photo}
                                    content={faker.collaborators[0].name}
                                  />
                                </div>
                                <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                                  <Tippy
                                    as="img"
                                    alt="Tailwise - Admin Dashboard Template"
                                    className="border-2 border-white rounded-full"
                                    src={faker.collaborators[1].photo}
                                    content={faker.collaborators[1].name}
                                  />
                                </div>
                                <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                                  <Tippy
                                    as="img"
                                    alt="Tailwise - Admin Dashboard Template"
                                    className="border-2 border-white rounded-full"
                                    src={faker.collaborators[2].photo}
                                    content={faker.collaborators[2].name}
                                  />
                                </div>
                                <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                                  <Tippy
                                    as="img"
                                    alt="Tailwise - Admin Dashboard Template"
                                    className="border-2 border-white rounded-full"
                                    src={faker.collaborators[3].photo}
                                    content={faker.collaborators[3].name}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex border-t border-slate-200/80">
                              <div className="flex flex-col items-center flex-1 py-3">
                                <div className="text-base font-medium">
                                  {faker.level}
                                </div>
                                <div className="text-slate-500">Level</div>
                              </div>
                              <div className="flex flex-col items-center flex-1 py-3 border-x border-slate-200/80">
                                <div className="text-base font-medium">
                                  {faker.duration}
                                </div>
                                <div className="text-slate-500">Duration</div>
                              </div>
                              <div className="flex flex-col items-center flex-1 py-3">
                                <div className="text-base font-medium">
                                  {faker.score}
                                </div>
                                <div className="text-slate-500">Score</div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                      {_.take(users.fakeUsers(), 9).map((faker, fakerKey) => (
                        <div
                          className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 box box--stacked"
                          key={fakerKey}
                        >
                          <Menu className="absolute top-0 right-0 mt-5 mr-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                                Link
                              </Menu.Item>
                              <Menu.Item>
                                <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                                Delete
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                          <div className="flex flex-col items-center px-5 pb-10 mt-10">
                            <div className="w-[72px] h-[72px] overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                              <img
                                alt="Tailwise - Admin Dashboard Template"
                                src={faker.photo}
                              />
                            </div>
                            <div className="mt-3 font-medium text-primary text-[0.94rem]">
                              {faker.name}
                            </div>
                            <div className="flex items-center justify-center gap-3 mt-2">
                              <div className="flex items-center text-slate-500">
                                <Lucide
                                  icon="Hotel"
                                  className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                                />
                                {faker.location}
                              </div>
                              <div className="flex items-center text-slate-500">
                                <Lucide
                                  icon="Calendar"
                                  className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                                />
                                {faker.joinedDate}
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 sm:flex-row">
                              <span className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
                                <span className="-mt-px truncate">
                                  {faker.department}
                                </span>
                              </span>
                              <span className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
                                <span className="-mt-px truncate">
                                  {faker.position}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center px-5 py-4 border-t border-slate-200/80">
                            <div className="text-slate-500">
                              {_.random(20, 100)}+ Connections
                            </div>
                            {_.random(0, 1) ? (
                              <Button
                                variant="outline-primary"
                                className="px-4 ml-auto border-primary/50"
                              >
                                <Lucide
                                  icon="UserPlus"
                                  className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                                />
                                Connect
                              </Button>
                            ) : (
                              <Button variant="primary" className="px-4 ml-auto">
                                <Lucide
                                  icon="Check"
                                  className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                                />
                                Connected
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="flex flex-col items-center py-14 box box--stacked mt-3.5">
                      <Lucide
                        icon="FileLock2"
                        className="stroke-[0.3] w-24 h-24 text-primary/70 fill-primary/5"
                      />
                      <div className="mt-5 text-base font-medium">
                        Two-Factor Authentication (2FA)
                      </div>
                      <div className="px-10 mt-1 text-center text-slate-500">
                        Enhance your account security by enabling Two-Factor
                        Authentication in the settings.
                      </div>
                      <Button variant="primary" className="mt-6">
                        <Lucide
                          icon="Lock"
                          className="stroke-[1.3] w-4 h-4 mr-2 -ml-0.5"
                        />
                        Enable Now
                      </Button>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>



        </div>

      </div>
    </div>
  );
}

export default Main;
