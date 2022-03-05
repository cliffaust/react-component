import { useState } from "react";
import moment from "moment";

import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import LoadingPulse from "../components/LoadingPulse";
import LoadingSpinerChase from "../components/LoadingSpinerChase";
import Switch from "../components/Switch";
import TopTooltip from "../components/TopTooltip";
import LeftTooltip from "../components/LeftTooltip";
import RightTooltip from "../components/RightTooltip";
import BottomTooltip from "../components/BottomTooltip";
import TopBarMessage from "../components/TopBarMessage";
import Modal from "../components/Modal";
import MobileModal from "../components/MobileModal";
import Card from "../components/Card";
import SelectInput from "../components/SelectInput";
import DatePicker from "../components/DatePicker";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";

export default function Home() {
  const [state, setState] = useState({
    name: "",
    message: "",
    showTopTooltip: false,
    showLeftTooltip: false,
    showRightTooltip: false,
    showBottomTooltip: false,
    showTopBarMessage: false,
    showModal: false,
    mobileShowModal: false,
    date: "",
    showDate: false,
    accordionNum: -1,
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const accordionVals = [
    {
      title: "First Title",
      subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatum praesentium quam cupiditate, accusamus impedit dicta
      officiis magni ea et error, debitis voluptates. Doloribus, ut
      optio sit culpa quas maxime! Maiores? Officia sunt vel architecto
      quam deleniti provident ratione quia facilis, odio id quod
      expedita totam quasi qui non eligendi tenetur? Error repudiandae
      cum maxime doloremque adipisci minus eos numquam aliquam.`,
    },
    {
      title: "Second Title",
      subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatum praesentium quam cupiditate, accusamus impedit dicta
      officiis magni ea et error, debitis voluptates. Doloribus, ut
      optio sit culpa quas maxime! Maiores? Officia sunt vel architecto
      quam deleniti provident ratione quia facilis, odio id quod
      expedita totam quasi qui non eligendi tenetur? Error repudiandae
      cum maxime doloremque adipisci minus eos numquam aliquam.`,
    },
    {
      title: "Third Title",
      subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatum praesentium quam cupiditate, accusamus impedit dicta
      officiis magni ea et error, debitis voluptates. Doloribus, ut
      optio sit culpa quas maxime! Maiores? Officia sunt vel architecto
      quam deleniti provident ratione quia facilis, odio id quod
      expedita totam quasi qui non eligendi tenetur? Error repudiandae
      cum maxime doloremque adipisci minus eos numquam aliquam.`,
    },
    {
      title: "Fourth Title",
      subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatum praesentium quam cupiditate, accusamus impedit dicta
      officiis magni ea et error, debitis voluptates. Doloribus, ut
      optio sit culpa quas maxime! Maiores? Officia sunt vel architecto
      quam deleniti provident ratione quia facilis, odio id quod
      expedita totam quasi qui non eligendi tenetur? Error repudiandae
      cum maxime doloremque adipisci minus eos numquam aliquam.`,
    },
  ];

  const imagePaths = [
    "/images/image1.jpg",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80",
    "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1533660823039-3793670cbe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1477089884677-c596568bd120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1507189449985-c364b6aa3a17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];
  return (
    <div
      onClick={() => {
        setState({
          ...state,
          showTopTooltip: false,
          showLeftTooltip: false,
          showRightTooltip: false,
          showBottomTooltip: false,
          showModal: false,
          showDate: false,
        });
      }}
      className="sm:px-8 px-4 py-8 relative"
    >
      <div className="mb-8 font-bold text-2xl font-Merriweather text-center">
        Buttons
      </div>
      <Button className="mb-4">
        <span className="inline-block">Click me</span>
      </Button>
      <div className="mb-4 mt-6 font-bold text-sm font-Merriweather">
        Loading button
      </div>
      <Button className="mb-4">
        <span className="mr-2 inline-block">Click me</span>{" "}
        <LoadingSpinerChase width={14} height={14}></LoadingSpinerChase>
      </Button>
      <div className="mb-4 mt-6 font-bold text-sm font-Merriweather">
        Alert button
      </div>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          setState({ ...state, showTopBarMessage: true });
          setTimeout(() => {
            setState({ ...state, showTopBarMessage: false });
          }, 3000);
        }}
        className="mb-4"
      >
        Show message
      </Button>
      <div className="mb-4 mt-6 font-bold text-sm font-Merriweather">Modal</div>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          setState({ ...state, showModal: true });
        }}
        className="mb-4"
      >
        Show modal
      </Button>
      <div className="mb-4 mt-6 font-bold text-sm font-Merriweather">
        Mobile Modal
      </div>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          setState({ ...state, mobileShowModal: true });
        }}
        className="mb-4"
      >
        Show mobile modal
      </Button>
      <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Inputs
      </div>
      <div className="md:w-96">
        <Input
          label="Username"
          placeholder="What is your username?"
          type="text"
          name="username"
          value={state.name}
          onChange={(event) => setState({ ...state, name: event.target.value })}
        ></Input>
      </div>
      <div className="mt-8 sm:w-96">
        <TextArea
          label="Message"
          placeholder="What is your message?"
          name="message"
          value={state.message}
          onChange={(event) =>
            setState({ ...state, message: event.target.value })
          }
        ></TextArea>
      </div>
      <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Loading
      </div>
      <div className="mt-8">
        <LoadingPulse
          width={30}
          height={30}
          className="bg-green-400"
        ></LoadingPulse>
      </div>
      <div className="mt-8">
        <LoadingSpinerChase
          width={30}
          height={30}
          color="#3fa34d"
        ></LoadingSpinerChase>
      </div>
      <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Switch
      </div>
      <div className="mt-8 mb-8">
        <Switch
          roundedColorClass="!bg-orange-500"
          slideColorClass="!bg-orange-200"
        ></Switch>
      </div>
      {/* <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Tooltip
      </div>
      <div className="mt-8 w-full sm:flex flex-col items-center justify-center mb-14">
        <h1 className="text-lg font-bold mb-4">Top</h1>
        <TopTooltip
          showTooltip={state.showTopTooltip}
          changeTooltipState={(e) => {
            e.stopPropagation();
            setState({ ...state, showTopTooltip: !state.showTopTooltip });
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TopTooltip>
      </div>
      <div className="mt-8 w-full sm:flex flex-col items-center justify-center mb-14">
        <h1 className="text-lg font-bold mb-4">Left</h1>
        <LeftTooltip
          showTooltip={state.showLeftTooltip}
          changeTooltipState={(e) => {
            e.stopPropagation();
            setState({ ...state, showLeftTooltip: !state.showLeftTooltip });
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </LeftTooltip>
      </div>
      <div className="mt-8 w-full sm:flex flex-col items-center justify-center mb-14">
        <h1 className="text-lg font-bold mb-4">Right</h1>
        <RightTooltip
          showTooltip={state.showRightTooltip}
          changeTooltipState={(e) => {
            e.stopPropagation();
            setState({ ...state, showRightTooltip: !state.showRightTooltip });
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </RightTooltip>
      </div>
      <div className="mt-8 w-full sm:flex flex-col items-center justify-center mb-28">
        <h1 className="text-lg font-bold mb-4">Bottom</h1>
        <BottomTooltip
          showTooltip={state.showBottomTooltip}
          changeTooltipState={(e) => {
            e.stopPropagation();
            setState({ ...state, showBottomTooltip: !state.showBottomTooltip });
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </BottomTooltip>
      </div> */}
      <TopBarMessage
        showTopBarMessage={state.showTopBarMessage}
        closeTopBarMessage={(e) => {
          e.stopPropagation();
          setState({ ...state, showTopBarMessage: false });
        }}
        className="bg-blue-100"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore minima
        hic error id fugit quos repudiandae, magni.
      </TopBarMessage>
      <Modal
        showModal={state.showModal}
        closeModal={(e) => {
          e.stopPropagation();
          setState({ ...state, showModal: false });
        }}
        className="w-full md:w-11/12 lg:w-4/5"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
        nulla inventore blanditiis quas a itaque quibusdam odio pariatur rerum
        sapiente mollitia nesciunt repellat unde quaerat, ea quasi ab officia!
        Corrupti ullam doloremque voluptas animi vero repudiandae quia, iusto
        consectetur voluptatibus ex placeat repellat suscipit tempore enim
        consequuntur fugit tempora cum sint et ad velit deserunt quisquam
        similique! Quaerat, sunt? Laudantium, harum aspernatur hic earum, ipsam
        repudiandae illum explicabo temporibus beatae incidunt mollitia tempore
        praesentium expedita autem! Harum perspiciatis inventore dolores vitae,
        cum fugit officiis adipisci impedit, provident, laudantium ea! Aut
        dolorem itaque repudiandae quis laboriosam odit saepe suscipit velit
        optio quas natus totam unde ipsum, dignissimos ea assumenda vitae at
        debitis eveniet ullam! Dolorum consectetur veritatis sunt aut expedita!
      </Modal>
      <MobileModal
        showModal={state.mobileShowModal}
        closeModal={(e) => {
          e.stopPropagation();
          setState({ ...state, mobileShowModal: false });
        }}
        className="w-full md:w-11/12 lg:w-4/5"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
        nulla inventore blanditiis quas a itaque quibusdam odio pariatur rerum
        sapiente mollitia nesciunt repellat unde quaerat, ea quasi ab officia!
        Corrupti ullam doloremque voluptas animi vero repudiandae quia, iusto
        consectetur voluptatibus ex placeat repellat suscipit tempore enim
        consequuntur fugit tempora cum sint et ad velit deserunt quisquam
        similique! Quaerat, sunt? Laudantium, harum aspernatur hic earum, ipsam
        repudiandae illum explicabo temporibus beatae incidunt mollitia tempore
        praesentium expedita autem! Harum perspiciatis inventore dolores vitae,
        cum fugit officiis adipisci impedit, provident, laudantium ea! Aut
        dolorem itaque repudiandae quis laboriosam odit saepe suscipit velit
        optio quas natus totam unde ipsum, dignissimos ea assumenda vitae at
        debitis eveniet ullam! Dolorum consectetur veritatis sunt aut expedita!
      </MobileModal>
      <div className="mt-24">
        <Card
          imagePaths={imagePaths}
          header="Right Here."
          subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          voluptate aut? Asperiores modi dolores distinctio."
        >
          <Button>Learn More</Button>
        </Card>
      </div>
      <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Input Select
      </div>
      <div className="mt-16 sm:w-96 mb-28">
        <SelectInput options={options} instanceId="foods"></SelectInput>
      </div>
      <div className="mb-8 mt-24 font-bold text-2xl font-Merriweather text-center">
        Date Field
      </div>
      <div className="mt-16">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setState({ ...state, showDate: !state.showDate });
          }}
          className="flex flex-col justify-center items-center bg-blue-100 shadow-sm rounded-md w-32 py-1 cursor-pointer"
        >
          <span className="text-sm font-bold mb-1">Date</span>
          <span className="text-sm">
            {state.date ? moment(state.date).format("MMM Do") : "Add date"}
          </span>
        </div>
      </div>
      <div className="mt-4 relative">
        <DatePicker
          setDate={(date) => {
            setState({ ...state, date: date });
          }}
          date={state.date}
          showDate={state.showDate}
        ></DatePicker>
      </div>
      <div className="mt-36 font-bold text-2xl font-Merriweather text-center">
        Text
      </div>
      <div className="mt-16">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        inventore dolorum fuga eos in voluptas deserunt eveniet doloremque, illo
        provident totam nesciunt eaque distinctio esse, optio repudiandae non
        recusandae temporibus. Ullam ad aliquid placeat eos maiores, aspernatur
        quia et quis vitae dolorum esse. Nemo rem dolor magni, totam corrupti
        delectus neque ipsa qui ratione omnis saepe minus nulla modi voluptas?
        Minima aut facere a rerum, nulla, id aperiam quos ex ab consectetur illo
        voluptatibus laborum totam maxime deserunt, magni assumenda sapiente
        excepturi atque. Aut dolore magni, totam ipsam amet nihil! Recusandae
        maiores temporibus inventore reprehenderit rerum laboriosam ratione
        earum voluptate a placeat amet quas, totam delectus exercitationem?
        Provident, impedit itaque illo distinctio animi reprehenderit nobis,
        facilis facere placeat maiores quisquam? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aspernatur inventore dolorum fuga eos in
        voluptas deserunt eveniet doloremque, illo provident totam nesciunt
        eaque distinctio esse, optio repudiandae non recusandae temporibus.
        Ullam ad aliquid placeat eos maiores, aspernatur quia et quis vitae
        dolorum esse. Nemo rem dolor magni, totam corrupti delectus neque ipsa
        qui ratione omnis saepe minus nulla modi voluptas? Minima aut facere a
        rerum, nulla, id aperiam quos ex ab consectetur illo voluptatibus
        laborum totam maxime deserunt, magni assumenda sapiente excepturi atque.
        Aut dolore magni, totam ipsam amet nihil! Recusandae maiores temporibus
        inventore reprehenderit rerum laboriosam ratione earum voluptate a
        placeat amet quas, totam delectus exercitationem? Provident, impedit
        itaque illo distinctio animi reprehenderit nobis, facilis facere placeat
        maiores quisquam?
      </div>
      <div className="mt-36 font-bold text-2xl font-Merriweather text-center">
        Accordion
      </div>
      <div className="mt-16 w-full">
        <div className="mx-auto max-w-3xl">
          {accordionVals.map((item, index) => {
            return (
              <div key={index} className="mt-2">
                <Accordion
                  setAccordionNum={(index) => {
                    setState({
                      ...state,
                      accordionNum: state.accordionNum === index ? -1 : index,
                    });
                  }}
                  accordionNum={state.accordionNum}
                  index={index}
                  title={item.title}
                  subText={item.subText}
                ></Accordion>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-36 font-bold text-2xl font-Merriweather text-center">
        Carousel
      </div>
      <div className="mt-16 max-w-xl h-72 rounded-xl overflow-hidden">
        <Carousel images={imagePaths} imageClass="rounded-2xl"></Carousel>
      </div>
    </div>
  );
}
