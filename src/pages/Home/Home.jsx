
import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import { imagesAdvice } from '../../data/imageData';
import { Carousel } from '../../components/Carousel/Carousel/';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../components/Error/ErrorFallBack';



export const Home = () => {

    return (
      <>
          <Header
              color="info"
              title="Random Advice"
              subtitle="Find your daily advice, it can help you keep moving forward..."
          />
          <Container
              title="Welcome!" 
              subtitle="Random Advice, a place where ideas flow freely and every corner is filled with unexpected wisdom. On our site, we’ve created a unique space with the goal of providing you with useful, entertaining, and inspiring advice on a wide range of topics—from everyday life tips to completely random recommendations that can change your perspective. It all started with the simple idea of offering a place where people could find something new every day: advice, a fresh idea, or a different point of view that, in many cases, can have a positive impact on their lives. We realized that the information and advice circulating on the Internet can be saturated, repetitive, and sometimes, not very helpful. That’s why we set out to offer a different approach, combining interesting facts with practical advice that could serve anyone, regardless of their interests or lifestyle."
              buttonText="What was today's advice?"
              buttonLink="/advice"
              backgroundClass= "bg-green" 
          />
          
          <ErrorBoundary FallbackComponent={ErrorFallback}> 
            <Carousel images= {imagesAdvice} /> 
          </ErrorBoundary>

          <Container
              title="Get to know us and be part of our community!" 
              subtitle="At Random Advice, we believe that every idea has the power to inspire. Join us by sharing your own advice and help create a space filled with wisdom and support. Leave your advice and share your perspective with someone who needs it! Together, we can make a difference!"
              buttonText="Join us"
              buttonLink="/about"
              backgroundClass= "bg-green" 
          />
          
      </>
    );
};

