import {
  AiFillCaretUp,
  AiFillPicture,
  AiFillPlusCircle,
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineWarning
} from "react-icons/ai";
import {
  BiCalendarEvent,
  BiCurrentLocation,
  BiMinusCircle,
  BiSearchAlt2,
  BiTrash,
  BiWater
} from "react-icons/bi";
import { BsLayersHalf, BsLink45Deg } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FiClock, FiDownload, FiPhone, FiUser, FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineLocationMarker
} from "react-icons/hi";
import { IoIosArrowDown, IoMdCalendar } from "react-icons/io";
import { IoCloseOutline, IoLocationSharp } from "react-icons/io5";
import {
  MdArrowBack,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdAttachFile,
  MdBusiness,
  MdDone,
  MdEmail,
  MdExitToApp,
  MdGroups,
  MdKeyboardArrowDown,
  MdList,
  MdMoreVert,
  MdOutlineAddCircle,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineFullscreen,
  MdOutlineFullscreenExit,
  MdOutlineInsertPhoto,
  MdOutlineNorthEast,
  MdOutlinePerson,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdSettings,
  MdSplitscreen,
  MdTune,
  MdUnfoldMore,
  MdViewModule
} from "react-icons/md";
import { RiArrowDownSLine, RiMap2Fill, RiTempColdLine } from "react-icons/ri";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
  TiThMenu
} from "react-icons/ti";
import { VscVerified } from "react-icons/vsc";
export interface IconProps {
  name: string;
  className?: string;
  color?: string;
  height?: string;
  width?: string;
  fun?: () => void;
}

const Icon = ({ name, className, height, width }: IconProps) => {
  switch (name) {
    case "temp":
      return <RiTempColdLine className={className} />;
    case "layer":
      return <BsLayersHalf className={className} />;
    case "location":
      return <HiOutlineLocationMarker className={className} />;
    case "date":
      return <BiCalendarEvent className={className} />;
    case "water":
      return <BiWater className={className} />;
    case "verified":
      return <VscVerified className={className} />;
    case "minus":
      return <CgMathMinus className={className} />;
    case "search":
      return <BiSearchAlt2 className={className} />;
    case "Searchlocation":
      return <GoLocation className={className} />;
    case "MapLocation":
      return <IoLocationSharp className={className} />;
    case "filter":
      return <MdTune className={className} />;
    case "delete":
      return <BiMinusCircle className={className} />;
    case "calendar":
      return <IoMdCalendar className={className} />;
    case "arrowDown":
      return <RiArrowDownSLine className={className} />;
    case "arrowUp":
      return <AiFillCaretUp className={className} />;
    case "close":
      return <IoCloseOutline className={className} />;
    case "map":
      return <RiMap2Fill className={className} />;
    case "current":
      return <BiCurrentLocation className={className} />;
    case "back":
      return <MdArrowBack className={className} />;
    case "backMobile":
      return <MdArrowBack className={className} />;
    case "phone":
      return <FiPhone className={className} />;
    case "email":
      return <MdEmail className={className} />;
    case "user":
      return <FiUser className={className} />;
    case "users":
      return <FiUsers className={className} />;
    case "modules":
      return <MdViewModule className={className} />;
    case "time":
      return <FiClock className={className} />;
    case "exit":
      return <MdExitToApp className={className} />;
    case "company":
      return <MdBusiness className={className} />;
    case "userEmail":
      return <AiOutlineMail className={className} />;
    case "dropdownArrow":
      return <MdKeyboardArrowDown className={className} />;
    case "connect":
      return <BsLink45Deg className={className} />;
    case "add":
      return <AiFillPlusCircle className={className} />;
    case "more":
      return <MdMoreVert className={className} />;
    case "menu":
      return <TiThMenu className={className} />;
    case "down":
      return <IoIosArrowDown className={className} />;
    case "attachment":
      return <MdAttachFile className={className} />;
    case "active":
      return <MdDone className={className} />;
    case "list":
      return <MdList className={className} />;
    case "unsorted":
      return <TiArrowUnsorted className={className} />;
    case "sortedUp":
      return <TiArrowSortedUp className={className} />;
    case "sortedDown":
      return <TiArrowSortedDown className={className} />;
    case "burger":
      return <GiHamburgerMenu className={className} />;
    case "forward":
      return <MdArrowForwardIos className={className} />;
    case "backward":
      return <MdArrowBackIos className={className} />;
    case "visibleOn":
      return <MdOutlineVisibility className={className} />;
    case "visibleOff":
      return <MdOutlineVisibilityOff className={className} />;
    case "returnArrow":
      return <HiOutlineArrowNarrowLeft className={className} />;
    case "padalintas":
      return <MdSplitscreen className={className} />;
    case "download":
      return <FiDownload className={className} />;
    case "picture":
      return <AiFillPicture className={className} />;
    case "edit":
      return <MdOutlineEdit className={className} />;
    case "group":
      return <MdGroups className={className} />;
    case "photo":
      return <MdOutlineInsertPhoto className={className} />;
    case "trash":
      return <BiTrash className={className} />;
    case "person":
      return <MdOutlinePerson className={className} />;
    case "showMore":
      return <MdUnfoldMore className={className} />;
    case "remove":
      return <FaTrash className={className} />;
    case "leftArrow":
      return <AiOutlineLeft className={className} />;
    case "rightArrow":
      return <AiOutlineRight className={className} />;
    case "deleteItem":
      return <MdOutlineDelete className={className} />;
    case "eye":
      return <AiOutlineEye className={className} />;
    case "northEast":
      return <MdOutlineNorthEast className={className} />;
    case "settings":
      return <MdSettings className={className} />;
    case "fullscreen":
      return <MdOutlineFullscreen className={className} />;
    case "exitFullScreen":
      return <MdOutlineFullscreenExit className={className} />;
    case "plus":
      return <AiOutlinePlus className={className} />;
    case "warning":
      return <AiOutlineWarning className={className} />;
    case "addCircle":
      return <MdOutlineAddCircle className={className} />;
    case "lock":
      return <AiOutlineLock className={className} />;
    case "min":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.425 44.5"
        >
          <g
            id="Group_7362"
            data-name="Group 7362"
            transform="translate(0 -34.55)"
          >
            <path
              id="Path_3222"
              data-name="Path 3222"
              d="M11.706,171.084a10.814,10.814,0,0,1-7.111-18.368.752.752,0,0,0-1.073-1.053,12.317,12.317,0,0,0,8.1,20.921h.042a.752.752,0,0,0,.041-1.5Z"
              transform="translate(0 -105.174)"
              fill="#14a166"
            />
            <path
              id="Path_3223"
              data-name="Path 3223"
              d="M100.586,56.656a.356.356,0,0,1-.173-.5A8.564,8.564,0,0,0,90.557,43.84a.323.323,0,0,1-.25-.032.371.371,0,0,1-.175-.228,12.214,12.214,0,0,0-23.3-.9.349.349,0,0,1-.369.231A12.368,12.368,0,0,0,58.788,44.4a.752.752,0,0,0,.742,1.307,10.834,10.834,0,0,1,5.244-1.4,11,11,0,0,1,1.494.09,1.859,1.859,0,0,0,1.98-1.219,10.711,10.711,0,0,1,20.434.79,1.888,1.888,0,0,0,.885,1.145,1.815,1.815,0,0,0,1.4.172,7.061,7.061,0,0,1,8.126,10.153,1.86,1.86,0,0,0,.9,2.6,4.117,4.117,0,0,1,2.485,3.737,4.039,4.039,0,0,1-1.193,2.894,4.256,4.256,0,0,1-3,1.26H92.314a.752.752,0,0,0,0,1.5h5.968a5.768,5.768,0,0,0,4.069-1.705,5.531,5.531,0,0,0,1.628-3.966A5.622,5.622,0,0,0,100.586,56.656Z"
              transform="translate(-52.554)"
              fill="#14a166"
            />
            <path
              id="Path_3224"
              data-name="Path 3224"
              d="M160.3,179.926v-2.555a9.508,9.508,0,0,0-1.012-4.294.752.752,0,0,0-1.344.673,8.017,8.017,0,0,1,.853,3.621v2.536h-2.3v-2.536a5.8,5.8,0,0,0-11.593,0v2.536h-2.3v-2.536a8.1,8.1,0,0,1,13.585-5.962.752.752,0,0,0,1.018-1.106,9.6,9.6,0,0,0-16.107,7.068v2.555A2.493,2.493,0,0,0,138.9,182.4v12.719a3.8,3.8,0,0,0,3.8,3.8h15.986a3.8,3.8,0,0,0,3.8-3.8v-1.6a.752.752,0,1,0-1.5,0v1.6a2.3,2.3,0,0,1-2.3,2.3H142.7a2.3,2.3,0,0,1-2.3-2.3V182.4a.988.988,0,0,1,.987-.987H160a.988.988,0,0,1,.987.987v7.912a.752.752,0,0,0,1.5,0V182.4A2.493,2.493,0,0,0,160.3,179.926Zm-13.9-2.555a4.293,4.293,0,0,1,8.586,0v2.536H146.4Z"
              transform="translate(-124.98 -119.866)"
              fill="#14a166"
            />
            <path
              id="Path_3225"
              data-name="Path 3225"
              d="M224.73,341.476a1.532,1.532,0,0,0,1.232.625h3.351a1.527,1.527,0,0,0,1.456-1.988l-.647-2.042a3.184,3.184,0,1,0-4.97,0l-.647,2.042A1.533,1.533,0,0,0,224.73,341.476Zm1.209-.91.663-2.093a1.41,1.41,0,0,0-.262-1.325,1.68,1.68,0,0,1,1.3-2.747q.054,0,.109,0a1.7,1.7,0,0,1,1.569,1.574,1.679,1.679,0,0,1-.38,1.171,1.407,1.407,0,0,0-.261,1.324l.663,2.094a.024.024,0,0,1-.023.031h-3.351a.02.02,0,0,1-.019-.01A.019.019,0,0,1,225.939,340.566Z"
              transform="translate(-201.944 -268.449)"
              fill="#14a166"
            />
          </g>
        </svg>
      );

    case "max":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.42 51.388"
        >
          <g
            id="Group_7370"
            data-name="Group 7370"
            transform="translate(0 -0.16)"
          >
            <path
              id="Path_3232"
              data-name="Path 3232"
              d="M50.643,112.24h0a.752.752,0,0,0-.752.751l0,1.843H8.46a.752.752,0,0,0,0,1.5H49.885l0,1.534a3.355,3.355,0,0,1-3.349,3.337H4.854A3.353,3.353,0,0,1,1.5,117.862V116.34H5.253a.752.752,0,0,0,0-1.5H1.5V95.075a3.353,3.353,0,0,1,3.349-3.349.752.752,0,0,0,0-1.5A4.859,4.859,0,0,0,0,95.075v22.787a4.859,4.859,0,0,0,4.854,4.854H18.83v5.3l-2.464,3.053h-1.06a.752.752,0,1,0,0,1.5H36.028a.752.752,0,1,0,0-1.5h-.974l-2.464-3.053v-5.3H46.534a4.863,4.863,0,0,0,4.854-4.838l.007-4.884a.752.752,0,0,0-.751-.754ZM31.086,127.529H28.425a.752.752,0,0,0,0,1.5h3.054l1.642,2.035H18.3l1.642-2.035h5.1a.752.752,0,0,0,0-1.5h-4.7v-4.814H31.086Z"
              transform="translate(0 -81.026)"
              fill="#e73f76"
            />
            <path
              id="Path_3233"
              data-name="Path 3233"
              d="M118.435,30.279h-7.4c-5.544-5.493-10.314-6.684-13.4-6.684s-7.86,1.191-13.4,6.684H80.634a.752.752,0,1,0,0,1.5h2.205a5.517,5.517,0,0,0,.442,7.007c5.945,6.325,11.084,7.653,14.347,7.653a16.957,16.957,0,0,0,9.938-3.715.752.752,0,1,0-.889-1.214,15.5,15.5,0,0,1-9.05,3.424c-2.967,0-7.674-1.245-13.251-7.179a4.009,4.009,0,0,1,0-5.482q.238-.253.474-.495h4.519a8.876,8.876,0,0,0,3.48,10.7.752.752,0,0,0,.812-1.267,7.365,7.365,0,0,1-2.649-9.436H92.75a5.856,5.856,0,1,0,9.756,0h1.736a7.365,7.365,0,0,1-2.649,9.436.752.752,0,1,0,.812,1.267,8.876,8.876,0,0,0,3.48-10.7h4.519q.236.242.474.495a4.009,4.009,0,0,1,0,5.482c-.581.619-1.183,1.213-1.789,1.768a.752.752,0,0,0,1.017,1.11c.633-.58,1.262-1.2,1.868-1.847a5.517,5.517,0,0,0,.442-7.007h6.017a3.352,3.352,0,0,1,3.349,3.348l-.021,14.712a.752.752,0,0,0,.751.754h0a.752.752,0,0,0,.752-.751l.021-14.713a4.859,4.859,0,0,0-4.853-4.854ZM101.98,35.019a4.352,4.352,0,1,1-7.257-3.236h5.812A4.341,4.341,0,0,1,101.98,35.019Zm.426-7.467a.752.752,0,0,0-.812,1.267,7.422,7.422,0,0,1,1.666,1.46h-2.2a5.838,5.838,0,0,0-6.865,0H92a7.42,7.42,0,0,1,1.666-1.46.752.752,0,1,0-.812-1.267,8.893,8.893,0,0,0-2.718,2.727h-3.72C91.1,26.055,95.03,25.1,97.629,25.1s6.532.956,11.216,5.179h-3.72a8.9,8.9,0,0,0-2.719-2.727Z"
              transform="translate(-71.868 -21.084)"
              fill="#e73f76"
            />
            <path
              id="Path_3234"
              data-name="Path 3234"
              d="M250.282,363.933v-.63a.752.752,0,1,0-1.5,0v.63a.752.752,0,0,0,1.5,0Z"
              transform="translate(-223.819 -326.035)"
              fill="#e73f76"
            />
            <path
              id="Path_3235"
              data-name="Path 3235"
              d="M339.089,1.665h3.336V5a.752.752,0,0,0,1.5,0V.912a.752.752,0,0,0-.752-.752h-4.089a.752.752,0,1,0,0,1.5Z"
              transform="translate(-304.395)"
              fill="#e73f76"
            />
            <path
              id="Path_3236"
              data-name="Path 3236"
              d="M343.178,224.628a.752.752,0,0,0,.752-.752v-4.089a.752.752,0,0,0-1.5,0v3.336h-3.336a.752.752,0,0,0,0,1.5Z"
              transform="translate(-304.395 -196.917)"
              fill="#e73f76"
            />
            <path
              id="Path_3237"
              data-name="Path 3237"
              d="M120.215,219.034a.752.752,0,0,0-.752.752v4.088a.752.752,0,0,0,.752.752H124.3a.752.752,0,0,0,0-1.5h-3.336v-3.336A.752.752,0,0,0,120.215,219.034Z"
              transform="translate(-107.478 -196.916)"
              fill="#e73f76"
            />
            <path
              id="Path_3238"
              data-name="Path 3238"
              d="M120.215,5.753A.752.752,0,0,0,120.968,5V1.665H124.3a.752.752,0,1,0,0-1.5h-4.088a.752.752,0,0,0-.752.752V5A.752.752,0,0,0,120.215,5.753Z"
              transform="translate(-107.478)"
              fill="#e73f76"
            />
          </g>
        </svg>
      );

    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.42 50.296"
        >
          <g
            id="Group_7369"
            data-name="Group 7369"
            transform="translate(0 -5.591)"
          >
            <path
              id="Path_3229"
              data-name="Path 3229"
              d="M48.3,243.429H46.213a.754.754,0,0,0,0,1.508H48.3a1.611,1.611,0,0,1,1.609,1.609v4.784H37.588v-6.393H43a.754.754,0,0,0,0-1.508H3.116A3.12,3.12,0,0,0,0,246.545v20.16a3.12,3.12,0,0,0,3.116,3.116H48.3a3.12,3.12,0,0,0,3.116-3.116v-20.16a3.12,3.12,0,0,0-3.116-3.116Zm1.609,16.984H42.949v-7.576h6.964Zm-23.5,0v-7.576H41.441v7.576Zm-1.508-7.576v7.576H9.878v-7.576Zm11.174,9.083v6.393H15.339v-6.393Zm0-10.591H15.339v-6.393H36.08ZM3.116,244.936H13.832v6.393H1.508v-4.784a1.611,1.611,0,0,1,1.609-1.609ZM1.508,266.705v-4.784H3.668a.754.754,0,1,0,0-1.508H1.508v-7.576H8.371v7.576H6.88a.754.754,0,1,0,0,1.508h6.951v6.393H3.116a1.611,1.611,0,0,1-1.609-1.609Zm46.8,1.609H37.588v-6.393H49.912v4.784A1.611,1.611,0,0,1,48.3,268.314Z"
              transform="translate(0 -213.934)"
              fill="#ff9a3e"
            />
            <path
              id="Path_3230"
              data-name="Path 3230"
              d="M361.542,113.724l-.218.281a.754.754,0,1,0,1.192.923l.218-.281a9.244,9.244,0,0,0-.7-12.089.754.754,0,0,0-1.076,1.056A7.731,7.731,0,0,1,361.542,113.724Z"
              transform="translate(-324.486 -87.017)"
              fill="#ff9a3e"
            />
            <path
              id="Path_3231"
              data-name="Path 3231"
              d="M111.937,27.577a.754.754,0,0,0,.742.626.762.762,0,0,0,.129-.011.754.754,0,0,0,.615-.871l-.453-2.627a6.223,6.223,0,0,1,2.2-5.856l1.339,2.576a2.748,2.748,0,0,0,5.156-1.672l-.283-1.9a9.37,9.37,0,0,1,1.118-5.986,9.268,9.268,0,0,1,4.291-3.9l1.8-.809-.052.782a5.02,5.02,0,0,0,2.188,4.477l3.407,2.306a.754.754,0,1,0,.845-1.249l-3.407-2.306a3.508,3.508,0,0,1-1.529-3.128l.061-.907a1.432,1.432,0,0,0-2.015-1.4l-1.919.861a10.766,10.766,0,0,0-4.985,4.531,10.884,10.884,0,0,0-1.3,6.953l.283,1.9a1.24,1.24,0,0,1-2.327.755l-1.51-2.906a1.195,1.195,0,0,0-1.757-.42,7.735,7.735,0,0,0-3.1,7.557Z"
              transform="translate(-100.181 0)"
              fill="#ff9a3e"
            />
          </g>
        </svg>
      );
    case "rejected":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 0 24 24"
          fill="#FFFF"
        ></svg>
      );

    case "returned":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 0 24 24"
          fill="#FFFF"
        ></svg>
      );

    case "linked":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        ></svg>
      );

    case "late":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        ></svg>
      );

    case "new":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        ></svg>
      );

    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <g id="info" transform="translate(-1 -1)">
            <circle
              id="Ellipse_196"
              data-name="Ellipse 196"
              cx="10"
              cy="10"
              r="10"
              transform="translate(2 2)"
              fill="none"
              stroke="#4b5565"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_80"
              data-name="Line 80"
              y1="4"
              transform="translate(12 12)"
              fill="none"
              stroke="#4b5565"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <line
              id="Line_81"
              data-name="Line 81"
              x2="0.01"
              transform="translate(12 8)"
              fill="none"
              stroke="#4b5565"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      );
    case "level0":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 26 32"
        >
          <g
            id="Group_7398"
            data-name="Group 7398"
            transform="translate(-815 -430)"
          >
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case "level1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 26 32"
        >
          <g
            id="Group_7398"
            data-name="Group 7398"
            transform="translate(-815 -430)"
          >
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#ff9a3e"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#e73f76"
            />
          </g>
        </svg>
      );
    case "level2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 26 32"
        >
          <g
            id="Group_7398"
            data-name="Group 7398"
            transform="translate(-815 -430)"
          >
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#ff9a3e"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case "level3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 26 32"
        >
          <g
            id="Group_7398"
            data-name="Group 7398"
            transform="translate(-815 -430)"
          >
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case "level4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 26 32"
        >
          <g
            id="Group_7398"
            data-name="Group 7398"
            transform="translate(-815 -430)"
          >
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case "line0":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="120"
          viewBox="0 0 220 120"
        >
          <path
            id="line"
            d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
            transform="translate(-90 -90)"
            fill="#f1f1f4"
          />
        </svg>
      );

    case "line1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="120"
          viewBox="0 0 220 120"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210a10,10,0,0,1-10-9.942,110.745,110.745,0,0,1,31.9-78.1,10,10,0,1,1,14.2,14.084,90.609,90.609,0,0,0-26.1,63.9A10,10,0,0,1,100.058,210Z"
                transform="translate(5186.001 2643.5)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g
            id="Group_7399"
            data-name="Group 7399"
            transform="translate(-5276 -2734)"
          >
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5186 2644)"
              fill="#f1f1f4"
            />
            <g
              id="Mask_Group_1"
              data-name="Mask Group 1"
              clip-path="url(#clip-path)"
            >
              <rect
                id="Rectangle_3471"
                data-name="Rectangle 3471"
                width="220"
                height="120"
                transform="translate(5276 2734)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    case "line2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220.5"
          height="120.5"
          viewBox="0 0 220.5 120.5"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210a10,10,0,0,1-10-10A110.125,110.125,0,0,1,200,90a10,10,0,0,1,0,20,90.1,90.1,0,0,0-90,90A10,10,0,0,1,100,210Z"
                transform="translate(5430.5 2643.5)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g
            id="Group_7400"
            data-name="Group 7400"
            transform="translate(-5520.5 -2733.5)"
          >
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5431 2644)"
              fill="#f1f1f4"
            />
            <g
              id="Mask_Group_2"
              data-name="Mask Group 2"
              clip-path="url(#clip-path)"
            >
              <rect
                id="Rectangle_3472"
                data-name="Rectangle 3472"
                width="220"
                height="120"
                transform="translate(5521 2734)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    case "line3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="120.271"
          viewBox="0 0 220 120.271"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210h-.024A10,10,0,0,1,90,199.976a110,110,0,0,1,200.2-62.7,10,10,0,0,1-16.4,11.447,90,90,0,0,0-163.8,51.3A10,10,0,0,1,100,210Z"
                transform="translate(5677 2638.271)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g
            id="Group_7401"
            data-name="Group 7401"
            transform="translate(-5767 -2728)"
          >
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5677 2638)"
              fill="#f1f1f4"
            />
            <g
              id="Mask_Group_3"
              data-name="Mask Group 3"
              clip-path="url(#clip-path)"
            >
              <rect
                id="Rectangle_3473"
                data-name="Rectangle 3473"
                width="220"
                height="120"
                transform="translate(5767 2728)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );
    case "line4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="120"
          viewBox="0 0 220 120"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
                transform="translate(5941 2638)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g
            id="Group_7402"
            data-name="Group 7402"
            transform="translate(-6031 -2728)"
          >
            <g
              id="Mask_Group_4"
              data-name="Mask Group 4"
              clip-path="url(#clip-path)"
            >
              <rect
                id="Rectangle_3474"
                data-name="Rectangle 3474"
                width="220"
                height="120"
                transform="translate(6031 2728)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
