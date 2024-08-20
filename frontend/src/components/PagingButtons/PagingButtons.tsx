import { Text } from '@/components';
import { theme } from '@/style/theme';
import * as S from './PagingButtons.style';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PagingButtons = ({ currentPage, totalPages, onPageChange }: Props) => {
  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(totalPages, 5);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
      endPage = totalPages;
    }

    const pages = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <S.PagingContainer>
      <PagingButton page={1} disabled={currentPage === 1} onClick={onPageChange} label='<<' />
      <PagingButton page={currentPage - 1} disabled={currentPage === 1} onClick={onPageChange} label='<' />

      {getPageNumbers().map((page) => (
        <PagingButton
          key={page}
          page={page}
          isActive={page === currentPage}
          onClick={onPageChange}
          label={String(page)}
        />
      ))}

      <PagingButton page={currentPage + 1} disabled={currentPage === totalPages} onClick={onPageChange} label='>' />
      <PagingButton page={totalPages} disabled={currentPage === totalPages} onClick={onPageChange} label='>>' />
    </S.PagingContainer>
  );
};

interface PagingButtonProps {
  page?: number;
  isActive?: boolean;
  disabled?: boolean;
  onClick: (page: number) => void;
  label: string;
}

const PagingButton = ({ page, isActive, disabled, onClick, label }: PagingButtonProps) => (
  <S.PagingButton isActive={isActive} disabled={disabled} onClick={() => onClick(page ?? 1)}>
    <Text.Small color={isActive ? theme.color.light.white : theme.color.light.secondary_500}>{label}</Text.Small>
  </S.PagingButton>
);

export default PagingButtons;
