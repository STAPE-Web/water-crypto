import HomeContent from "./HomeContent";

const Services: React.FC & {
    HomeContent: typeof HomeContent;
} = () => {
    return null;
};

Services.HomeContent = HomeContent;

export default Services;