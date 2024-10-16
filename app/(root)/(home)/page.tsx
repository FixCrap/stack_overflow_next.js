import QuestionCard from "@/components/cards/QuestionCard";
import { HomeFilter } from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResults from "@/components/shared/NoResults";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

// //Fake Questions:
// const questions = [
// 	{
// 		_id: "1",
// 		title: "Chey mou message me!",
// 		tags: [
// 			{ _id: "1", name: "Agapi" },
// 			{ _id: "2", name: "Ti einai?" },
// 		],
// 		author: {
// 			_id: "1",
// 			name: "John Doe",
// 			picture: "john-doe.jpg",
// 		},
// 		upvotes: 1353454360,
// 		views: 10000000,
// 		answers: [],
// 		createdAt: new Date("2023-09-01T12:00:00.000Z"),
// 	},
// 	{
// 		_id: "2",
// 		title: "Chey mou message me!",
// 		tags: [
// 			{ _id: "1", name: "Agapi" },
// 			{ _id: "2", name: "Ti einai?" },
// 		],
// 		author: {
// 			_id: "1",
// 			name: "John Doe",
// 			picture: "john-doe.jpg",
// 		},
// 		upvotes: 10,
// 		views: 100,
// 		answers: [],
// 		createdAt: new Date("2021-09-01T12:00:00.000Z"),
// 	},
// ];

const Home = async () => {
	const result = await getQuestions({});

	console.log(result.questions);

	return (
		<>
			<div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
				<h1 className='h1-bold text-dark100_light900'>All Questions</h1>

				<Link
					href='/ask-question'
					className='flex justify-end max-sm:w-full'>
					<Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center '>
				<LocalSearchbar
					route='/'
					iconPosition='left'
					imgSrc='/assets/icons/search.svg'
					placeholder='Search for questions'
					otherClasees='flex-1'
				/>
				<Filter
					filters={HomePageFilters}
					otherClasses='min-h-[56px] sm:min-w-[170]'
					containerClasses='hidden max-md:flex'
				/>
			</div>
			<HomeFilter />
			<div className='mt-10 flex w-full flex-col gap-6 '>
				{/* Looping through Guestions */}

				{result.questions.length > 0 ? (
					result.questions.map((question) => (
						<QuestionCard
							key={question._id}
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={question.upvotes}
							views={question.views}
							answers={question.answers}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<NoResults
						title="There's no question to show"
						description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
				discussion. our query could be the next big thing others learn from. Get
				involved! 💡'
						link='/ask-question'
						linkTitle='Ask a Question'
					/>
				)}
			</div>
		</>
	);
};

export default Home;
