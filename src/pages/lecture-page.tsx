import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findLectureById } from "../data/course-content";
import { useI18n } from "@/hooks/use-I18n";
import LectureFooter from "@/components/layout/lecture-footer";

export default function LecturePage() {
	const { id } = useParams<{ id: string }>();
	const { language, t } = useI18n();
	const lectureId = id ? parseInt(id, 10) : NaN;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [lectureId]);

	if (isNaN(lectureId)) {
		return (
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-3xl font-bold'>{t("lecture.invalidId.title")}</h1>
				<p className='mt-4'>{t("lecture.invalidId.body")}</p>
			</div>
		);
	}

	const result = findLectureById(lectureId);

	if (!result) {
		return (
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-3xl font-bold'>{t("lecture.notFound.title")}</h1>
				<p className='mt-4'>{t("lecture.notFound.body", { lectureId })}</p>
			</div>
		);
	}

	const { module, lecture } = result;
	const LectureComponent = lecture.content?.[language];

	return (
		<>
			<article className='max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-blue'>
				<div className='mb-8'>
					<p className='text-blue-600 dark:text-blue-400 font-semibold'>
						{t("module")} {module.module}: {module.title[language]}
					</p>
					<h1 className='text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mt-2'>
						{lecture.title[language]}
					</h1>
				</div>

				{LectureComponent ? (
					<LectureComponent />
				) : (
					<div className='p-8 text-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
						<h2 className='text-xl font-semibold'>
							{t("lecture.comingSoon.title")}
						</h2>
						<p className='mt-2 text-gray-600 dark:text-gray-400'>
							{t("lecture.comingSoon.body")}
						</p>
					</div>
				)}
			</article>
			{LectureComponent && !isNaN(lectureId) && (
				<div className='max-w-4xl mx-auto'>
					<LectureFooter currentLectureId={lectureId} />
				</div>
			)}
		</>
	);
}
