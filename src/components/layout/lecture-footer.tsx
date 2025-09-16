import { courseContent } from "@/data/course-content";
import { useI18n } from "@/hooks/use-I18n";
import type { Lecture } from "@/types";
import React from "react";
import { Link } from "react-router-dom";

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M19 12H5' />
		<path d='M12 19l-7-7 7-7' />
	</svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M5 12h14' />
		<path d='m12 5 7 7-7 7' />
	</svg>
);

interface LectureFooterProps {
	currentLectureId: number;
}

const allLectures: Lecture[] = courseContent.flatMap(
	(module) => module.lectures
);

const LectureFooter: React.FC<LectureFooterProps> = ({ currentLectureId }) => {
	const { language, t } = useI18n();
	const currentIndex = allLectures.findIndex((l) => l.id === currentLectureId);

	const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
	const nextLecture =
		currentIndex < allLectures.length - 1
			? allLectures[currentIndex + 1]
			: null;

	return (
		<footer className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center'>
			{prevLecture ? (
				<Link
					to={`/conferencia/${prevLecture.id}`}
					className='inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
				>
					<ArrowLeftIcon className='h-5 w-5 mr-3 shrink-0' />
					<div className='overflow-hidden'>
						<p className='text-sm font-medium'>{t("lecture.prev")}</p>
						<p className='text-sm text-gray-500 dark:text-gray-400 truncate'>
							{prevLecture.title[language]}
						</p>
					</div>
				</Link>
			) : (
				<div />
			)}
			{nextLecture ? (
				<Link
					to={`/conferencia/${nextLecture.id}`}
					className='inline-flex items-center text-right text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
				>
					<div className='overflow-hidden'>
						<p className='text-sm font-medium'>{t("lecture.next")}</p>
						<p className='text-sm text-gray-500 dark:text-gray-400 truncate'>
							{nextLecture.title[language]}
						</p>
					</div>
					<ArrowRightIcon className='h-5 w-5 ml-3 shrink-0' />
				</Link>
			) : (
				<div />
			)}
		</footer>
	);
};

export default LectureFooter;
