import Title from "./Title";

const Text: React.FC & {
    Title: typeof Title;
} = () => {
    return null;
};

Text.Title = Title;

export default Text;